import paintingfinal from "../../public/artistic/arts/paintingfinal.png";
import sushi from "../../public/artistic/arts/sushi.png";
import kyosaref from "../../public/artistic/arts/kyosaref.png";
import diogomika from "../../public/artistic/arts/diogomika.png";
import kassius from "../../public/artistic/arts/kassius.png";
import pipflank from "../../public/artistic/arts/pipflank.png";
import tt2027 from "../../public/artistic/arts/2027tt.png";
import veilsoflives from "../../public/artistic/arts/veilsoflives.png";
import illhelpu from "../../public/artistic/arts/illhelpu.png";
import sundays from "../../public/artistic/arts/sundays.png";
import fragility from "../../public/artistic/arts/fragility.png";
import angel from "../../public/artistic/arts/angel.png";
import railway from "../../public/artistic/arts/railway.png";
import rainymissionary from "../../public/artistic/arts/rainymissionary.png";
import twoyears from "../../public/artistic/arts/twoyears.png";
import end from "../../public/artistic/arts/end.png";
import immortals from "../../public/artistic/arts/4immortals.png";
import eudepois from "../../public/artistic/arts/eudepois.png";
import cycles from "../../public/artistic/arts/cycles.png";
import fireworks from "../../public/artistic/arts/fireworks.png";
import breaksoul from "../../public/artistic/arts/breaksoul.png";
import gettingtired from "../../public/artistic/arts/gettingtired.png";
import spikeshide from "../../public/artistic/arts/spikeshide.png";
import ibh from "../../public/artistic/arts/ibh.png";
import rover from "../../public/artistic/arts/rover.png";
import revelation from "../../public/artistic/arts/revelation.png";
import first from "../../public/artistic/arts/1.png";
import second from "../../public/artistic/arts/2.png";
import third from "../../public/artistic/arts/3.png";
import fourth from "../../public/artistic/arts/4.png";
import fifth from "../../public/artistic/arts/5.png";
import sixth from "../../public/artistic/arts/6.png";
import seventh from "../../public/artistic/arts/7.png";
import eighth from "../../public/artistic/arts/8.png";
import ninth from "../../public/artistic/arts/9.png";
import tenth from "../../public/artistic/arts/10.png";
import eleventh from "../../public/artistic/arts/11.png";
import twelfth from "../../public/artistic/arts/12.png";
import thirteenth from "../../public/artistic/arts/13.png";
import fourteenth from "../../public/artistic/arts/14.png";
import fifteenth from "../../public/artistic/arts/15.png";
import sixteenth from "../../public/artistic/arts/16.png";
import seventeenth from "../../public/artistic/arts/17.png";
import eighteenth from "../../public/artistic/arts/18.png";
import nineteenth from "../../public/artistic/arts/19.png";
import twentieth from "../../public/artistic/arts/20.png";
import twentyfirst from "../../public/artistic/arts/21.png";
import twentysecond from "../../public/artistic/arts/22.png";
import twentythird from "../../public/artistic/arts/23.png";
import twentyfourth from "../../public/artistic/arts/24.png";
import twentyfifth from "../../public/artistic/arts/25.png";
import twentysixth from "../../public/artistic/arts/26.png";
import twentyseventh from "../../public/artistic/arts/27.png";
import twentyeighth from "../../public/artistic/arts/28.png";
import twentyninth from "../../public/artistic/arts/29.png";
import thirtieth from "../../public/artistic/arts/30.png";
import thirtyfirst from "../../public/artistic/arts/31.png";
import thirtysecond from "../../public/artistic/arts/32.png";
import thirtythird from "../../public/artistic/arts/33.png";
import thirtyfourth from "../../public/artistic/arts/34.png";
import thirtyfifth from "../../public/artistic/arts/35.png";
import thirtysixth from "../../public/artistic/arts/36.png";
import thirtyseventh from "../../public/artistic/arts/37.png";
import thirtyeighth from "../../public/artistic/arts/38.png";
import thirtyninth from "../../public/artistic/arts/39.png";
import fortieth from "../../public/artistic/arts/40.png";
import fortyfirst from "../../public/artistic/arts/41.png";
import fortysecond from "../../public/artistic/arts/42.png";
import fortythird from "../../public/artistic/arts/43.png";
import fortyfourth from "../../public/artistic/arts/44.png";
import fortyfifth from "../../public/artistic/arts/45.png";
import fortysixth from "../../public/artistic/arts/46.png";

import oli1 from "../../public/artistic/vectorial/oli_1.png";
import bubi from "../../public/artistic/vectorial/bubi.png";
import vec2 from "../../public/artistic/vectorial/2.png";
import vec3 from "../../public/artistic/vectorial/3.png";
import vec4 from "../../public/artistic/vectorial/4.png";
import vec5 from "../../public/artistic/vectorial/5.png";
import vec6 from "../../public/artistic/vectorial/6.png";
import vec7 from "../../public/artistic/vectorial/7.png";
import vec8 from "../../public/artistic/vectorial/8.png";
import vec9 from "../../public/artistic/vectorial/9.png";
import vec10 from "../../public/artistic/vectorial/10.png";
import vec11 from "../../public/artistic/vectorial/11.png";
import { StaticImageData } from "next/legacy/image";

export interface ArtItem {
    imgUrl: StaticImageData; // Alterando para StaticImageData
    category: string;
    contentWarning?: boolean;
}

const StaticArts: ArtItem[] = [
    { imgUrl: paintingfinal, category: "Paintings", contentWarning: true },
    { imgUrl: sushi, category: "Paintings", contentWarning: false },
    { imgUrl: kyosaref, category: "Paintings", contentWarning: false },
    { imgUrl: diogomika, category: "Paintings", contentWarning: true },
    { imgUrl: kassius, category: "Paintings", contentWarning: false },
    { imgUrl: pipflank, category: "Paintings", contentWarning: false },
    { imgUrl: tt2027, category: "Paintings", contentWarning: false },
    { imgUrl: veilsoflives, category: "Paintings", contentWarning: true },
    { imgUrl: illhelpu, category: "Paintings", contentWarning: true },
    { imgUrl: sundays, category: "Paintings", contentWarning: false },
    { imgUrl: fragility, category: "Paintings", contentWarning: false },
    { imgUrl: angel, category: "Paintings", contentWarning: false },
    { imgUrl: railway, category: "Paintings", contentWarning: false },
    { imgUrl: rainymissionary, category: "Paintings", contentWarning: false },
    { imgUrl: twoyears, category: "Paintings", contentWarning: false },
    { imgUrl: end, category: "Paintings", contentWarning: false },
    { imgUrl: immortals, category: "Paintings", contentWarning: false },
    { imgUrl: eudepois, category: "Paintings", contentWarning: false },
    { imgUrl: cycles, category: "Paintings", contentWarning: false },
    { imgUrl: fireworks, category: "Paintings", contentWarning: false },
    { imgUrl: breaksoul, category: "Paintings", contentWarning: false },
    { imgUrl: gettingtired, category: "Paintings", contentWarning: false },
    { imgUrl: spikeshide, category: "Paintings", contentWarning: false },
    { imgUrl: ibh, category: "Paintings", contentWarning: false },
    { imgUrl: rover, category: "Paintings", contentWarning: false },
    { imgUrl: revelation, category: "Paintings", contentWarning: false },
    { imgUrl: first, category: "Paintings", contentWarning: false },
    { imgUrl: second, category: "Paintings", contentWarning: false },
    { imgUrl: third, category: "Paintings", contentWarning: false },
    { imgUrl: fourth, category: "Paintings", contentWarning: false },
    { imgUrl: fifth, category: "Paintings", contentWarning: false },
    { imgUrl: sixth, category: "Paintings", contentWarning: false },
    { imgUrl: seventh, category: "Paintings", contentWarning: false },
    { imgUrl: eighth, category: "Paintings", contentWarning: false },
    { imgUrl: ninth, category: "Paintings", contentWarning: false },
    { imgUrl: tenth, category: "Paintings", contentWarning: false },
    { imgUrl: eleventh, category: "Paintings", contentWarning: false },
    { imgUrl: twelfth, category: "Paintings", contentWarning: false },
    { imgUrl: thirteenth, category: "Paintings", contentWarning: false },
    { imgUrl: fourteenth, category: "Paintings", contentWarning: false },
    { imgUrl: fifteenth, category: "Paintings", contentWarning: false },
    { imgUrl: sixteenth, category: "Paintings", contentWarning: false },
    { imgUrl: seventeenth, category: "Paintings", contentWarning: false },
    { imgUrl: eighteenth, category: "Paintings", contentWarning: false },
    { imgUrl: nineteenth, category: "Paintings", contentWarning: false },
    { imgUrl: twentieth, category: "Paintings", contentWarning: false },
    { imgUrl: twentyfirst, category: "Paintings", contentWarning: false },
    { imgUrl: twentysecond, category: "Paintings", contentWarning: false },
    { imgUrl: twentythird, category: "Paintings", contentWarning: false },
    { imgUrl: twentyfourth, category: "Paintings", contentWarning: false },
    { imgUrl: twentyfifth, category: "Paintings", contentWarning: false },
    { imgUrl: twentysixth, category: "Paintings", contentWarning: false },
    { imgUrl: twentyseventh, category: "Paintings", contentWarning: false },
    { imgUrl: twentyeighth, category: "Paintings", contentWarning: false },
    { imgUrl: twentyninth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtieth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyfirst, category: "Paintings", contentWarning: false },
    { imgUrl: thirtysecond, category: "Paintings", contentWarning: false },
    { imgUrl: thirtythird, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyfourth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyfifth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtysixth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyseventh, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyeighth, category: "Paintings", contentWarning: false },
    { imgUrl: thirtyninth, category: "Paintings", contentWarning: false },
    { imgUrl: fortieth, category: "Paintings", contentWarning: false },
    { imgUrl: fortyfirst, category: "Paintings", contentWarning: false },
    { imgUrl: fortysecond, category: "Paintings", contentWarning: false },
    { imgUrl: fortythird, category: "Paintings", contentWarning: false },
    { imgUrl: fortyfourth, category: "Paintings", contentWarning: false },
    { imgUrl: fortyfifth, category: "Paintings", contentWarning: false },
    { imgUrl: fortysixth, category: "Paintings", contentWarning: false },
    { imgUrl: oli1, category: "Vectorial", contentWarning: false },
    { imgUrl: bubi, category: "Vectorial", contentWarning: false },
    { imgUrl: vec2, category: "Vectorial", contentWarning: false },
    { imgUrl: vec3, category: "Vectorial", contentWarning: false },
    { imgUrl: vec4, category: "Vectorial", contentWarning: false },
    { imgUrl: vec5, category: "Vectorial", contentWarning: false },
    { imgUrl: vec6, category: "Vectorial", contentWarning: false },
    { imgUrl: vec7, category: "Vectorial", contentWarning: false },
    { imgUrl: vec8, category: "Vectorial", contentWarning: false },
    { imgUrl: vec9, category: "Vectorial", contentWarning: false },
    { imgUrl: vec10, category: "Vectorial", contentWarning: false },
    { imgUrl: vec11, category: "Vectorial", contentWarning: false },
];

export default StaticArts;