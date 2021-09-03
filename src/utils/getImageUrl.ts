export const getImageUrl = (url: string) => {
  if (url) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }
  return null
}
