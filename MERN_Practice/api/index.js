import axios from 'axios'

const api = axios.create({
	baseURL: 'http://192.168.0.16:8080/api',
	contentType: 'multipart/form-data',
	cache: false
})

export const createTrack = (payload) => api.post(`/track`, payload)
export const getTracks = () => api.get(`/tracks`)
export const deleteTrack = id => api.delete(`/track/${id}`)
export const getTrackById = id => api.get(`/track/${id}`)

const apis = {
	createTrack,
	getTracks,
	deleteTrack,
	getTrackById
}

export default apis