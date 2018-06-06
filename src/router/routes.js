import Home from '../views/Home'
import ClassTypes from '../views/ClassTypes'
import Gallery from '../views/Gallery'
import Timetable from '../views/Timetable'
import ContactMe from '../views/ContactMe'

export default [
  {
    name: 'HOME',
    path: '/',
    component: Home
  },
  {
    name: 'CLASS TYPES',
    path: '/class-types',
    component: ClassTypes
  },
  {
    name: 'GALLERY',
    path: '/gallery',
    component: Gallery
  },
  // {
  //   name: 'TIMETABLE',
  //   path: '/timetable',
  //   component: Timetable
  // },
  {
    name: 'CONTACT ME',
    path: '/contact-me',
    component: ContactMe
  }
]
