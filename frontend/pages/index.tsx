import TaskInput from '@/components/TaskInput/TaskInput'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>ToDo List</title>
      </Head>
      <main>
        <h1>ToDo List</h1>
        <TaskInput />
      </main>
    </>
  )
}

export default Home
