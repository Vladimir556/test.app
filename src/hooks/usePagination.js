import React from 'react'

/**
 * @param initialValue
 * @param {number} limit - принимает кол-во выводимых данных
 * @function nextPage - возвращает след.данные
 * @function prevPage - возвращает пред.данные
 * @returns {{nextPage: (function(): void), start: number, limit: initialValue, prevPage: prevPage}}
 */

const usePagination = (initialValue) => {

    const [start,setStart] = React.useState(0)
    const [limit] = React.useState(initialValue)

    const nextPage = () => setStart(start + limit)
    const prevPage = () => {
        start !== 0
            ? setStart(start - limit)
            : alert('Данных нет')
    }

    return {
        start,
        limit,
        nextPage,
        prevPage
    }
}

export default usePagination