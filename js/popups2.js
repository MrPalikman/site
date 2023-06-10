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
