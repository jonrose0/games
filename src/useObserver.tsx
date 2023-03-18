// import { useState, useEffect, useRef } from 'react'
// import { useFetch } from './useFetch'

// export const useObserver = (options) => {
//   const containerRef = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const [page, setPage] = useState(1)
//   const {isLoading, items} = useFetch('', page)

//   const callbackfunction = entries => {
//     console.log(entries)
//     const [entry] = entries
//     console.log(entry)
//     setIsVisible(entry.isIntersecting)
//     if (entry.isIntersecting) {
//       setPage(page => page + 1)
//     }
//   }

//   console.log('observe', isVisible)

//   useEffect(() => {
//     const observer = new IntersectionObserver(callbackfunction, options)
//     if (containerRef.current) observer.observe(containerRef.current)

//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current)
//     }
//   }, [containerRef, options])

//   return [containerRef, isVisible]
// }
