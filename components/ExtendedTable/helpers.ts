export const capitalize = (str: string) =>
  str?.replace(/\b\w/g, substr => substr.toUpperCase())

export const isValidDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1,3}Z$/
  return regex.test(dateString)
}

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString)

  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const generateKeyValueString = <T>(obj: T) => {
  let result = ""

  for (let key in obj) {
    if (obj?.hasOwnProperty(key)) {
      result += `${key}: ${obj[key]}\n`
    }
  }

  return result
}
