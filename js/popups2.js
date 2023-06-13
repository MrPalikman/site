const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModal);
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);
};

modalController({
  modal: ".modal1",
  btnOpen: ".section__button1",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modal2",
  btnOpen: ".section__button2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal3",
  btnOpen: ".section__button3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal4",
  btnOpen: ".section__button4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal5",
  btnOpen: ".section__button5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal6",
  btnOpen: ".section__button6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal7",
  btnOpen: ".section__button7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal8",
  btnOpen: ".section__button8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal9",
  btnOpen: ".section__button9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal10",
  btnOpen: ".section__button10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal11",
  btnOpen: ".section__button11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal12",
  btnOpen: ".section__button12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal13",
  btnOpen: ".section__button13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal14",
  btnOpen: ".section__button14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal15",
  btnOpen: ".section__button15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal16",
  btnOpen: ".section__button16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal17",
  btnOpen: ".section__button17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal18",
  btnOpen: ".section__button18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal19",
  btnOpen: ".section__button19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal20",
  btnOpen: ".section__button20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal21",
  btnOpen: ".section__button21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal22",
  btnOpen: ".section__button22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal23",
  btnOpen: ".section__button23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal24",
  btnOpen: ".section__button24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal25",
  btnOpen: ".section__button25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal26",
  btnOpen: ".section__button26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal27",
  btnOpen: ".section__button27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal28",
  btnOpen: ".section__button28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal28",
  btnOpen: ".section__button28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal29",
  btnOpen: ".section__button29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal30",
  btnOpen: ".section__button30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal31",
  btnOpen: ".section__button31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal32",
  btnOpen: ".section__button32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal33",
  btnOpen: ".section__button33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal34",
  btnOpen: ".section__button34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal35",
  btnOpen: ".section__button35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal36",
  btnOpen: ".section__button36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal37",
  btnOpen: ".section__button37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal38",
  btnOpen: ".section__button38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal39",
  btnOpen: ".section__button39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal40",
  btnOpen: ".section__button40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal41",
  btnOpen: ".section__button41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal42",
  btnOpen: ".section__button42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal43",
  btnOpen: ".section__button43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal44",
  btnOpen: ".section__button44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal45",
  btnOpen: ".section__button45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal46",
  btnOpen: ".section__button46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal47",
  btnOpen: ".section__button47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal48",
  btnOpen: ".section__button48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal49",
  btnOpen: ".section__button49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal50",
  btnOpen: ".section__button50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal51",
  btnOpen: ".section__button51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal52",
  btnOpen: ".section__button52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal53",
  btnOpen: ".section__button53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal54",
  btnOpen: ".section__button54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal55",
  btnOpen: ".section__button55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal56",
  btnOpen: ".section__button56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal57",
  btnOpen: ".section__button57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal57",
  btnOpen: ".section__button57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal58",
  btnOpen: ".section__button58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal58",
  btnOpen: ".section__button58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal59",
  btnOpen: ".section__button59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal60",
  btnOpen: ".section__button60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal61",
  btnOpen: ".section__button61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal62",
  btnOpen: ".section__button62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal63",
  btnOpen: ".section__button63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal64",
  btnOpen: ".section__button64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal65",
  btnOpen: ".section__button65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal66",
  btnOpen: ".section__button66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal67",
  btnOpen: ".section__button67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal68",
  btnOpen: ".section__button68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal69",
  btnOpen: ".section__button69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal70",
  btnOpen: ".section__button70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal71",
  btnOpen: ".section__button71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal72",
  btnOpen: ".section__button72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal73",
  btnOpen: ".section__button73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal74",
  btnOpen: ".section__button74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal75",
  btnOpen: ".section__button75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal76",
  btnOpen: ".section__button76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal77",
  btnOpen: ".section__button77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal78",
  btnOpen: ".section__button78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal79",
  btnOpen: ".section__button79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal80",
  btnOpen: ".section__button80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal81",
  btnOpen: ".section__button81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal82",
  btnOpen: ".section__button82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal83",
  btnOpen: ".section__button83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal84",
  btnOpen: ".section__button84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal85",
  btnOpen: ".section__button85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal86",
  btnOpen: ".section__button86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal87",
  btnOpen: ".section__button87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal88",
  btnOpen: ".section__button88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal89",
  btnOpen: ".section__button89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal90",
  btnOpen: ".section__button90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal91",
  btnOpen: ".section__button91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal92",
  btnOpen: ".section__button92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal93",
  btnOpen: ".section__button93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal94",
  btnOpen: ".section__button94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal95",
  btnOpen: ".section__button95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal96",
  btnOpen: ".section__button96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal97",
  btnOpen: ".section__button97",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal98",
  btnOpen: ".section__button98",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal99",
  btnOpen: ".section__button99",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal100",
  btnOpen: ".section__button100",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal101",
  btnOpen: ".section__button101",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal102",
  btnOpen: ".section__button102",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal103",
  btnOpen: ".section__button103",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal104",
  btnOpen: ".section__button104",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal105",
  btnOpen: ".section__button105",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal106",
  btnOpen: ".section__button106",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal107",
  btnOpen: ".section__button107",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal108",
  btnOpen: ".section__button108",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal109",
  btnOpen: ".section__button109",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal110",
  btnOpen: ".section__button110",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal111",
  btnOpen: ".section__button111",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal112",
  btnOpen: ".section__button112",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal113",
  btnOpen: ".section__button113",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal114",
  btnOpen: ".section__button114",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal115",
  btnOpen: ".section__button115",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal116",
  btnOpen: ".section__button116",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal117",
  btnOpen: ".section__button117",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal118",
  btnOpen: ".section__button118",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal119",
  btnOpen: ".section__button119",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal120",
  btnOpen: ".section__button120",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal121",
  btnOpen: ".section__button121",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal122",
  btnOpen: ".section__button122",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal123",
  btnOpen: ".section__button123",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal124",
  btnOpen: ".section__button124",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal125",
  btnOpen: ".section__button125",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal126",
  btnOpen: ".section__button126",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal127",
  btnOpen: ".section__button127",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal128",
  btnOpen: ".section__button128",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal129",
  btnOpen: ".section__button129",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal130",
  btnOpen: ".section__button130",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal131",
  btnOpen: ".section__button131",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal132",
  btnOpen: ".section__button132",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal133",
  btnOpen: ".section__button133",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal134",
  btnOpen: ".section__button134",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal135",
  btnOpen: ".section__button135",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal136",
  btnOpen: ".section__button136",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal137",
  btnOpen: ".section__button137",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal138",
  btnOpen: ".section__button138",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal139",
  btnOpen: ".section__button139",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal140",
  btnOpen: ".section__button140",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal141",
  btnOpen: ".section__button141",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal142",
  btnOpen: ".section__button142",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal143",
  btnOpen: ".section__button143",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal144",
  btnOpen: ".section__button144",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal145",
  btnOpen: ".section__button145",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal146",
  btnOpen: ".section__button146",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal147",
  btnOpen: ".section__button147",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal148",
  btnOpen: ".section__button148",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal149",
  btnOpen: ".section__button149",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal150",
  btnOpen: ".section__button150",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal151",
  btnOpen: ".section__button151",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal152",
  btnOpen: ".section__button152",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal153",
  btnOpen: ".section__button153",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal154",
  btnOpen: ".section__button154",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal155",
  btnOpen: ".section__button155",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal156",
  btnOpen: ".section__button156",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal157",
  btnOpen: ".section__button157",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal158",
  btnOpen: ".section__button158",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal159",
  btnOpen: ".section__button159",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal160",
  btnOpen: ".section__button160",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal161",
  btnOpen: ".section__button161",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal162",
  btnOpen: ".section__button163",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal164",
  btnOpen: ".section__button164",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal165",
  btnOpen: ".section__button165",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal166",
  btnOpen: ".section__button166",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal167",
  btnOpen: ".section__button167",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal168",
  btnOpen: ".section__button168",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal169",
  btnOpen: ".section__button169",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal170",
  btnOpen: ".section__button170",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal171",
  btnOpen: ".section__button171",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal172",
  btnOpen: ".section__button172",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal173",
  btnOpen: ".section__button173",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal174",
  btnOpen: ".section__button174",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal175",
  btnOpen: ".section__button175",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal176",
  btnOpen: ".section__button176",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal177",
  btnOpen: ".section__button177",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal178",
  btnOpen: ".section__button178",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal179",
  btnOpen: ".section__button179",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal180",
  btnOpen: ".section__button180",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal190",
  btnOpen: ".section__button190",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal191",
  btnOpen: ".section__button191",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal192",
  btnOpen: ".section__button192",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp1",
  btnOpen: ".section__buttonKp1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp2",
  btnOpen: ".section__buttonKp2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp3",
  btnOpen: ".section__buttonKp3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp4",
  btnOpen: ".section__buttonKp4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp5",
  btnOpen: ".section__buttonKp5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp6",
  btnOpen: ".section__buttonKp6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp7",
  btnOpen: ".section__buttonKp7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp8",
  btnOpen: ".section__buttonKp8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp9",
  btnOpen: ".section__buttonKp9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp10",
  btnOpen: ".section__buttonKp10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp11",
  btnOpen: ".section__buttonKp11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp12",
  btnOpen: ".section__buttonKp12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp13",
  btnOpen: ".section__buttonKp13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp14",
  btnOpen: ".section__buttonKp14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp15",
  btnOpen: ".section__buttonKp15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp16",
  btnOpen: ".section__buttonKp16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp17",
  btnOpen: ".section__buttonKp17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp18",
  btnOpen: ".section__buttonKp18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp19",
  btnOpen: ".section__buttonKp19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp20",
  btnOpen: ".section__buttonKp20",
  btnClose: ".modal__close",
});
// modalController({
//   modal: ".modalKp21",
//   btnOpen: ".section__buttonKp21",
//   btnClose: ".modal__close",
// });
modalController({
  modal: ".modalKp22",
  btnOpen: ".section__buttonKp22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp23",
  btnOpen: ".section__buttonKp23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp24",
  btnOpen: ".section__buttonKp24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp25",
  btnOpen: ".section__buttonKp25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp26",
  btnOpen: ".section__buttonKp26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp27",
  btnOpen: ".section__buttonKp27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp28",
  btnOpen: ".section__buttonKp28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp29",
  btnOpen: ".section__buttonKp29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp30",
  btnOpen: ".section__buttonKp30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp31",
  btnOpen: ".section__buttonKp31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp32",
  btnOpen: ".section__buttonKp32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp33",
  btnOpen: ".section__buttonKp33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp34",
  btnOpen: ".section__buttonKp34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp35",
  btnOpen: ".section__buttonKp35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp36",
  btnOpen: ".section__buttonKp36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp37",
  btnOpen: ".section__buttonKp37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp38",
  btnOpen: ".section__buttonKp38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp39",
  btnOpen: ".section__buttonKp39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp40",
  btnOpen: ".section__buttonKp40",
  btnClose: ".modal__close",
});


// --------------------------gorizontal-----------------------------------------

modalController({
  modal: ".modalГ1",
  btnOpen: ".section__buttonГ1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ2",
  btnOpen: ".section__buttonГ2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ3",
  btnOpen: ".section__buttonГ3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ4",
  btnOpen: ".section__buttonГ4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ5",
  btnOpen: ".section__buttonГ5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ6",
  btnOpen: ".section__buttonГ6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ7",
  btnOpen: ".section__buttonГ7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ8",
  btnOpen: ".section__buttonГ8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ9",
  btnOpen: ".section__buttonГ9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ10",
  btnOpen: ".section__buttonГ10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ11",
  btnOpen: ".section__buttonГ11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ12",
  btnOpen: ".section__buttonГ12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ13",
  btnOpen: ".section__buttonГ13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ14",
  btnOpen: ".section__buttonГ14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ15",
  btnOpen: ".section__buttonГ15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ16",
  btnOpen: ".section__buttonГ16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ17",
  btnOpen: ".section__buttonГ17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ18",
  btnOpen: ".section__buttonГ18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ19",
  btnOpen: ".section__buttonГ19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ20",
  btnOpen: ".section__buttonГ20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ21",
  btnOpen: ".section__buttonГ21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ22",
  btnOpen: ".section__buttonГ22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ23",
  btnOpen: ".section__buttonГ23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ24",
  btnOpen: ".section__buttonГ24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ25",
  btnOpen: ".section__buttonГ25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ26",
  btnOpen: ".section__buttonГ26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ27",
  btnOpen: ".section__buttonГ27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ28",
  btnOpen: ".section__buttonГ28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ29",
  btnOpen: ".section__buttonГ29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ30",
  btnOpen: ".section__buttonГ30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ31",
  btnOpen: ".section__buttonГ31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ32",
  btnOpen: ".section__buttonГ32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ33",
  btnOpen: ".section__buttonГ33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ34",
  btnOpen: ".section__buttonГ34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ35",
  btnOpen: ".section__buttonГ35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ36",
  btnOpen: ".section__buttonГ36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ37",
  btnOpen: ".section__buttonГ37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ38",
  btnOpen: ".section__buttonГ38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ39",
  btnOpen: ".section__buttonГ39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ40",
  btnOpen: ".section__buttonГ40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ41",
  btnOpen: ".section__buttonГ41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ42",
  btnOpen: ".section__buttonГ42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ43",
  btnOpen: ".section__buttonГ43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ44",
  btnOpen: ".section__buttonГ44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ45",
  btnOpen: ".section__buttonГ45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ46",
  btnOpen: ".section__buttonГ46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ47",
  btnOpen: ".section__buttonГ47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ48",
  btnOpen: ".section__buttonГ48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ49",
  btnOpen: ".section__buttonГ49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ50",
  btnOpen: ".section__buttonГ50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ51",
  btnOpen: ".section__buttonГ51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ52",
  btnOpen: ".section__buttonГ52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ53",
  btnOpen: ".section__buttonГ53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ54",
  btnOpen: ".section__buttonГ54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ55",
  btnOpen: ".section__buttonГ55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ56",
  btnOpen: ".section__buttonГ56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ57",
  btnOpen: ".section__buttonГ57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ58",
  btnOpen: ".section__buttonГ58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ59",
  btnOpen: ".section__buttonГ59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ60",
  btnOpen: ".section__buttonГ60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ61",
  btnOpen: ".section__buttonГ61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ62",
  btnOpen: ".section__buttonГ62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ63",
  btnOpen: ".section__buttonГ63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ64",
  btnOpen: ".section__buttonГ64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ65",
  btnOpen: ".section__buttonГ65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ66",
  btnOpen: ".section__buttonГ66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ67",
  btnOpen: ".section__buttonГ67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ68",
  btnOpen: ".section__buttonГ68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ69",
  btnOpen: ".section__buttonГ69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ70",
  btnOpen: ".section__buttonГ70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ71",
  btnOpen: ".section__buttonГ71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ72",
  btnOpen: ".section__buttonГ72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ73",
  btnOpen: ".section__buttonГ73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ74",
  btnOpen: ".section__buttonГ74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ75",
  btnOpen: ".section__buttonГ75",
  btnClose: ".modal__close",
})
modalController({
  modal: ".modalГ76",
  btnOpen: ".section__buttonГ76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ77",
  btnOpen: ".section__buttonГ77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ78",
  btnOpen: ".section__buttonГ78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ79",
  btnOpen: ".section__buttonГ79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ80",
  btnOpen: ".section__buttonГ80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ81",
  btnOpen: ".section__buttonГ81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ82",
  btnOpen: ".section__buttonГ82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ83",
  btnOpen: ".section__buttonГ83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ84",
  btnOpen: ".section__buttonГ84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ85",
  btnOpen: ".section__buttonГ85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ86",
  btnOpen: ".section__buttonГ86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ87",
  btnOpen: ".section__buttonГ87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ88",
  btnOpen: ".section__buttonГ88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ89",
  btnOpen: ".section__buttonГ89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ90",
  btnOpen: ".section__buttonГ90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ91",
  btnOpen: ".section__buttonГ91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ92",
  btnOpen: ".section__buttonГ92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ93",
  btnOpen: ".section__buttonГ93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ94",
  btnOpen: ".section__buttonГ94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ95",
  btnOpen: ".section__buttonГ95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ96",
  btnOpen: ".section__buttonГ96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ97",
  btnOpen: ".section__buttonГ97",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ98",
  btnOpen: ".section__buttonГ98",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ99",
  btnOpen: ".section__buttonГ99",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ100",
  btnOpen: ".section__buttonГ100",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ101",
  btnOpen: ".section__buttonГ101",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ102",
  btnOpen: ".section__buttonГ102",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ103",
  btnOpen: ".section__buttonГ103",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ104",
  btnOpen: ".section__buttonГ104",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ105",
  btnOpen: ".section__buttonГ105",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ106",
  btnOpen: ".section__buttonГ106",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ107",
  btnOpen: ".section__buttonГ107",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ108",
  btnOpen: ".section__buttonГ108",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ109",
  btnOpen: ".section__buttonГ109",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ110",
  btnOpen: ".section__buttonГ110",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ111",
  btnOpen: ".section__buttonГ111",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ112",
  btnOpen: ".section__buttonГ112",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ113",
  btnOpen: ".section__buttonГ113",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ114",
  btnOpen: ".section__buttonГ114",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ115",
  btnOpen: ".section__buttonГ115",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ116",
  btnOpen: ".section__buttonГ116",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ117",
  btnOpen: ".section__buttonГ117",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ118",
  btnOpen: ".section__buttonГ118",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ119",
  btnOpen: ".section__buttonГ119",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ120",
  btnOpen: ".section__buttonГ120",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ121",
  btnOpen: ".section__buttonГ121",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ122",
  btnOpen: ".section__buttonГ122",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ123",
  btnOpen: ".section__buttonГ123",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ124",
  btnOpen: ".section__buttonГ124",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ125",
  btnOpen: ".section__buttonГ125",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ126",
  btnOpen: ".section__buttonГ126",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ127",
  btnOpen: ".section__buttonГ127",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ128",
  btnOpen: ".section__buttonГ128",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ129",
  btnOpen: ".section__buttonГ129",
  btnClose: ".modal__close",
});
