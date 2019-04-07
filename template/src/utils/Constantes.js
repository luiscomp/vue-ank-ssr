const URL_BASE_ARQUIVOS = 'http://localhost:80/{{ name }}/'

export default Object.freeze({
    MAX_PAGE_LENGTH: 10,
    URL_IMAGENS: URL_BASE_ARQUIVOS.concat('imagens/')
})
