import "./Rodape.css"

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="blank">
                            <img src="/imagens/fb.png" alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="x.com" target="blank">
                            <img src="/imagens/tw.png" alt="X"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="blank">
                            <img src="/imagens/ig.png" alt="Instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por José Carlos
                </p>
            </section>
        </footer>
    )
}

export default Rodape   