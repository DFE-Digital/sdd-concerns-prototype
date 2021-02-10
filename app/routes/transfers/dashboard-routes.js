const { group } = require('console')
const fs = require('fs')
const path = require('path')
const { default: request } = require('sync-request')

const filterDataByStatus = (data, statuses) => {
  filteredData = []
  statuses.forEach(status => {
    data.filter(project => project.status == status).forEach(project => filteredData.push(project))
  })
  return filteredData;
}

const filterDataByProjectType = (data, types) => {
  filteredData = []
  types.forEach(type => {
    data.filter(project => project.project == type).forEach(project => filteredData.push(project))
  })
  return filteredData;
}

const filterDataByNameOrId = (data, nameOrId) => {
  nameOrId = nameOrId.toLowerCase()

  return data.filter(project => project.name.toLowerCase().includes(nameOrId) || project.reference.toLowerCase().includes(nameOrId))
}

const groupDataByStatus = (data) =>
  data.reduce((result, project) => {
    let status = project.status
    if (result[status]) {
      result[status].push(project)
    } else {
      result[status] = [project]
    }

    return result
  }, [])

module.exports = router => {
  // Flush data when starting bulk action flow from the beginning
  router.get('/transfers/dashboard/:variantId', (req, res) => {
    let data = require(path.join(__dirname, `../../data/transfers/dashboards/variant-${req.params.variantId}.json`))
    let selectedStatuses = []
    let selectedProjectTypes = []
    let nameSearched = ""

    if (req.query.status?.length > 0 && req.query.status != "_unchecked") {
      selectedStatuses = req.query.status
      data = filterDataByStatus(data, req.query.status)
    }

    if (req.query.project?.length > 0 && req.query.project != "_unchecked") {
      selectedProjectTypes = req.query.project
      data = filterDataByProjectType(data, req.query.project)
    }

    if (req.query['project-name-or-number']?.length > 0) {
      nameSearched = req.query['project-name-or-number']
      data = filterDataByNameOrId(data, req.query['project-name-or-number'])
    }

    data = groupDataByStatus(data)
    res.render(`transfers/dashboards/variant-${req.params.variantId}`, { projects: data, selectedStatuses, nameSearched, selectedProjectTypes })
  })
}
