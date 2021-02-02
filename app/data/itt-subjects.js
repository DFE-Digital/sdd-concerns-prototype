// From https://api2.publish-teacher-training-courses.service.gov.uk/api/v3/subjects?sort=subject_name

discontinuedSubjects = [
  "Humanities",
  "Balanced Science"
]

modernLanguagesSubjects = [
  "French",
  "English as a second or other language",
  "German",
  "Italian",
  "Japanese",
  "Mandarin",
  "Russian",
  "Spanish",
  "Modern languages (other)"
]

primarySubjects = [
  "Primary",
  "Primary with English",
  "Primary with geography and history",
  "Primary with mathematics",
  "Primary with modern languages",
  "Primary with physical education",
  "Primary with science"
]

secondarySubjects = [
  "Art and design",
  "Science",
  "Biology",
  "Business studies",
  "Chemistry",
  "Citizenship",
  "Classics",
  "Communication and media studies",
  "Computing",
  "Dance",
  "Design and technology",
  "Drama",
  "Economics",
  "English",
  "Geography",
  "Health and social care",
  "History",
  "Mathematics",
  "Music",
  "Philosophy",
  "Physical education",
  "Physics",
  "Psychology",
  "Religious education",
  "Social sciences"
]

furtherEducationSubjects = []

let allSubjects = [...primarySubjects, ...secondarySubjects, ...modernLanguagesSubjects].sort()

module.exports = {
  allSubjects,
  discontinuedSubjects,
  modernLanguagesSubjects,
  primarySubjects,
  secondarySubjects
}
