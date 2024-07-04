import {Head} from "../Head/Head.jsx";
import {About} from "../About/About.jsx";
import {Cost} from "../Cost/Cost.jsx";
import {Feedback} from "../Feedback/Feedback.jsx";
import {Faq} from "../FAQ/Faq.jsx";
import {InfoService} from "../InfoService/InfoService.jsx";
import {OrderForm} from "../OrderForm/OrderForm.jsx";
import {Footer} from "../Footer/Footer.jsx";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup.jsx";
import {useState} from "react";

function App() {

    const [isBurgerMenu, setIsBurgerMenu] = useState(false)

    function handleOpenBurger() {
        setIsBurgerMenu(true)
    }

    function handleClosePopup() {
        setIsBurgerMenu(false)
    }

    function formSubmit () {
        fetch('https://example.com/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: value.name,
                tel: value.tel,
            })
        })
            .then(response => response.json())
    }

  return (
    <>
        <Head openBurger={handleOpenBurger}/>
        <About/>
        <Cost/>
        <Feedback/>
        <Faq/>
        <InfoService/>
        <OrderForm onSubmitData={formSubmit}/>
        <Footer/>

        <BurgerMenuPopup
            isOpen={isBurgerMenu}
            onClose={handleClosePopup}
        />
    </>
  )
}

export default App
