import SidebarHome from "../../Sidebar/SidebarHome";
import styles from "./rewards.module.css";
import reward1 from "../../../assets/reward1.png";
import reward2 from "../../../assets/reward2.png";
import reward3 from "../../../assets/reward3.png";
import reward4 from "../../../assets/reward4.png";
import star from "../../../assets/star.png";
import verification from "../../../assets/verification.png";
import prize from "../../../assets/prize.png";
import account from "../../../assets/account.png";
import verification2 from "../../../assets/verification2.png";
import prize2 from "../../../assets/prize2.png";
import account2 from "../../../assets/account2.png";
import { useState } from "react";
import Footer from "../../Footer/Footer";

const Rewards = () => {
  const rewards = [
    {
      title: "Acumula estrellas",
      text: [
        "Con Starbucks® Rewards cada 1€ gastado en Starbucks se convertirá en 100 estrellas en tu app.",
        "Tantas ⭐ que necesitarás tus 🕶️.",
      ],
      img: reward1,
    },
    {
      title: "3.000 Estrellas",
      text: [
        "Cada 3.000 estrellas acumuladas te regalaremos tu bebida favorita. ¡Tus días brillaran más!",
      ],
      img: reward2,
    },
    {
      title: "10.000 Estrellas",
      text: [
        "Al conseguir 10.000 estrellas en 12 meses… ¡Pasarás a ser socio Gold!",
        "Al ser Gold, tendrás la posibilidad de personalizar tus bebidas completamente gratis.",
      ],
      img: reward3,
    },
    {
      title: "3.000 Estrellas",
      text: [
        "Queremos celebrar contigo un día tan importante por ello, si eres socio Gold, tendrás tu bebida favorita por tu el día de tu cumpleaños. ¡Te lo mereces!",
      ],
      img: reward4,
    },
  ];

  const steps = [
    {
      title: "Crea tu cuenta",
      img: account,
      content: {
        img: account2,
        title: "Crea tu cuenta",
        text: "El registro es rápido y fácil. Descarga la app Starbucks® Rewards España y regístrate creando una cuenta.",
        buttons: ["Descarga la app", "Inicia sesión"],
      },
    },
    {
      title: "Verifica tu cuenta",
      img: verification,
      content: {
        img: verification2,
        title: "Verifica tu cuenta",
        text: "Revisa tu correo y verifica tu cuenta haciendo click en el enlace enviado.",
        buttons: ["Comenzar"],
      },
    },
    {
      title: "Acumula estrellas y gana recompensas",
      img: prize,
      content: {
        img: prize2,
        title: "Acumula estrellas y gana recompensas",
        text: "Gana 100 estrellas por cada 1€ gastado. ¡Haz que tus días brillen más!",
        buttons: ["Comenzar"],
      },
    },
  ];

  const buttons = [
    "Más información",
    "Preguntas frecuentes",
    "Eliminar cuenta",
    "Listado de tiendas no participantes",
  ];

  const [selectedStep, setSelectedStep] = useState(0);
  const handleStepClick = (stepIndex) => {
    setSelectedStep(stepIndex);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarHome />
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Descarga la app Starbucks® Rewards</h2>
            <h3>
              Accede a un universo de beneficios y haz que tus días brillen más
            </h3>
            <h2>Acumula estrellas y consigue bebidas gratis</h2>
            {rewards.map((reward, index) => (
              <div key={index} className={styles.reward}>
                <img src={reward.img} />
                <div className={styles.text}>
                  <h3>{reward.title}</h3>
                  {reward.text.map((rew, subIndex) => (
                    <div key={subIndex}>{rew}</div>
                  ))}
                </div>
                <div className={styles.line}></div>
              </div>
            ))}

            <div className={styles.starReward}>
              <h4>DESCARGA LA APP STARBUCKS® REWARDS ESPAÑA</h4>
              <div className={styles.starContainer}>
                <img src={star} />
                <div className={styles.star}>
                  <h3>Haz que tus días brillen más</h3>
                  <p>
                    Descubre un universo de beneficios con la app Starbucks®
                    Rewards España
                  </p>
                  <button>Descarga la app</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.application}>
            <h2>Una aplicación muy intuitiva</h2>
            <p>
              Comprueba las estrellas acumuladas y tus recompensas conseguidas.
              Descarga la app de Starbucks® Rewards ahora y haz que tus días
              brillen más.
              <br></br>
              <br></br>Consulta aquí el{" "}
              <strong>Listado de tiendas no participantes</strong>
            </p>

            <div className={styles.steps}>
              {steps.map((step, index) => (
                <div key={index} className={styles.stepContainer}>
                  <div
                    className={`${styles.step} ${
                      index !== selectedStep ? styles.inactiveStep : ""
                    }`}
                  >
                    <img
                      src={step.img}
                      onClick={() => handleStepClick(index)}
                    />
                    <h3>{step.title}</h3>
                  </div>
                  {selectedStep === index && (
                    <div className={styles.stepLine}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedStep !== null && (
            <div className={styles.selectedStepContent}>
              <img src={steps[selectedStep].content.img} />
              <div className={styles.rewContent}>
                <h3>{steps[selectedStep].content.title}</h3>
                <p>{steps[selectedStep].content.text}</p>
                <div className={styles.buttons}>
                  {steps[selectedStep].content.buttons.map((button, index) => (
                    <button key={index}>{button}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.faqContainer}>
            <h2>¿Tienes alguna pregunta?</h2>
            <h3>
              Podrás preguntarle todas tus dudas a tu barista o ver las
              preguntas más frecuentes aquí.
            </h3>
            <div className={styles.faq}>
              {buttons.map((el, index) => (
                <button key={index}>{el}</button>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rewards;
