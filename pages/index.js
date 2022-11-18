import HomePage from '../components/HomePage'
import Layout from '../components/Layout'
import Project from '../components/Project'
import Contact from './contact'
export default function Home() {
  return (
    <Layout>
      <HomePage />
      <Project/>
      <Contact/>
    </Layout>
  )
}
