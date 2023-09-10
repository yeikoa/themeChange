'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const[theme, setTheme] = useState(()=> {
    if(window.matchMedia('(prefers-color-scheme: dark').matches){
      return "dark"
    }
    return "ligth"
  })

  useEffect(()=>{
    if(theme == 'dark'){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  const HandleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == 'ligth' ? "dark" : "ligth" )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black" >
      <button className='bg-lime-700 rounded-lg text-cyan-950 hover:bg-orange-500 dark:bg-red-800 '
      onClick={HandleChangeTheme}
      >
        Color
      </button >
    </main>
  )
}
