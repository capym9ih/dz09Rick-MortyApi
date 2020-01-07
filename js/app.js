axios
    .get('https://rickandmortyapi.com/api/character/')

    .then(res => {

        const { pages } = res.data.info

        Promise.all([...new Array(pages)].map((el, i) => axios.get(`https://rickandmortyapi.com/api/character/?page=${i + 1}`)))

            .then(res => console.log(res))
    })

