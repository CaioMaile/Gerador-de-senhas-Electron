const { app, BrowserWindow } = require('electron')

const CriarJanela = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        resizable: false
    })

    janela.loadFile('./public/index.html')
}

app.whenReady()
.then(() => {
    CriarJanela()
})

.catch((erro) => {
    console.log(erro.menssage)
})