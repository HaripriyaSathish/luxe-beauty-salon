import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

export const fetchSiteContent = async () => {
  const response = await api.get('/site-content/')
  return response.data
}

export default api

export const getWhatsAppLink = (whatsappNumber, message = "Hi! I'd like to book an appointment at Luxe Beauty Salon.") => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
}

export const fetchServices = async () => {
  const response = await api.get('/services/')
  return response.data
}
export const fetchGallery = async () => {
  const response = await api.get('/gallery/')
  return response.data
}
export const fetchOffers = async () => {
  const response = await api.get('/offers/')
  return response.data
}
export const fetchAboutStats = async () => {
  const response = await api.get('/about-stats/')
  return response.data
}
export const fetchWhyUs = async () => {
  const response = await api.get('/why-us/')
  return response.data
}
export const fetchReviews = async () => {
  const response = await api.get('/reviews/')
  return response.data
}
export const fetchFAQ = async () => {
  const response = await api.get('/faq/')
  return response.data
}
export const fetchSocialLinks = async () => {
  const response = await api.get('/social-links/')
  return response.data
}