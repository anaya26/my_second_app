import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex42Cb, useFlex43Cb, useFlex44Cb, useFlex58Cb, useDiv58Cb, useFlex76Cb, useDiv96Cb, useFlex60Cb, useDiv60Cb, useFlex61Cb, useDiv61Cb, useDiv73Cb, useFlex65Cb, useFlex66Cb, useDiv74Cb, useFlex68Cb, useFlex69Cb, useFlex70Cb, useDiv75Cb, useFlex71Cb, useDiv76Cb, useDiv77Cb, useDiv78Cb, useFlex72Cb, useFlex73Cb, useFlex78Cb, useFlex63Cb, useDiv67Cb, useDiv68Cb, useDiv70Cb, useFlex64Cb, useDiv69Cb, useDiv71Cb, useDiv72Cb, useFlex82Cb, useFlex62Cb, useDiv63Cb, useDiv64Cb, useDiv65Cb, useDiv98Cb, useImage66Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useButton24Cb, useButton25Cb, useImage94Cb, useTextBox178Cb, useTextBox179Cb, useDiv97Cb, useTextBox232Cb, useImage131Cb, useImage132Cb, useImage133Cb, useImage134Cb, useImage95Cb, useImage100Cb, useTextBox181Cb, useTextBox182Cb, useButton28Cb, useTextBox184Cb, useImage101Cb, useTextBox185Cb, useTextBox186Cb, useTextBox187Cb, useButton29Cb, useTextBox212Cb, useTextBox213Cb, useImage111Cb, useImage112Cb, useImage113Cb, useImage115Cb, useImage116Cb, useImage117Cb, useImage118Cb, useTextBox214Cb, useImage123Cb, useImage124Cb, useImage125Cb, useImage127Cb, useImage128Cb, useTextBox216Cb, useTextBox217Cb, useTextBox220Cb, useTextBox222Cb, useTextBox224Cb, useTextBox226Cb, useTextBox228Cb, useTextBox230Cb, useTextBox218Cb, useTextBox219Cb, useTextBox221Cb, useTextBox223Cb, useTextBox225Cb, useTextBox227Cb, useTextBox229Cb, useTextBox231Cb, useTextBox215Cb, useImage119Cb, useImage120Cb, useImage121Cb, useImage122Cb, useTextBox199Cb, useImage105Cb, useTextBox200Cb, useTextBox206Cb, useImage107Cb, useTextBox201Cb, useTextBox207Cb, useImage108Cb, useTextBox202Cb, useTextBox208Cb, useImage106Cb, useTextBox203Cb, useTextBox209Cb, useImage109Cb, useTextBox204Cb, useTextBox210Cb, useImage110Cb, useTextBox205Cb, useTextBox211Cb, useTextBox188Cb, useTextBox189Cb, useImage102Cb, useTextBox190Cb, useTextBox191Cb, useTextBox193Cb, useImage103Cb, useTextBox192Cb, useTextBox194Cb, useTextBox195Cb, useImage104Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb } from "../page-cbs/Home1";
import "../page-css/Home1.css";
import "../custom/Home1";

export default function Home1() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex42Props = useStore((state)=>state["Home1"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home1"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home1"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home1"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["Home1"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home1"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex58Props = useStore((state)=>state["Home1"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home1"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div58Props = useStore((state)=>state["Home1"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home1"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Flex76Props = useStore((state)=>state["Home1"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home1"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Div96Props = useStore((state)=>state["Home1"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home1"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Flex60Props = useStore((state)=>state["Home1"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home1"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div60Props = useStore((state)=>state["Home1"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home1"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Flex61Props = useStore((state)=>state["Home1"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home1"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Div61Props = useStore((state)=>state["Home1"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home1"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Div73Props = useStore((state)=>state["Home1"]["Div73"]);
const Div73IoProps = useIoStore((state)=>state["Home1"]["Div73"]);
const Div73Cb = useDiv73Cb()
const Flex65Props = useStore((state)=>state["Home1"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home1"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home1"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home1"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Div74Props = useStore((state)=>state["Home1"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home1"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Flex68Props = useStore((state)=>state["Home1"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home1"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home1"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home1"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex70Props = useStore((state)=>state["Home1"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home1"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Div75Props = useStore((state)=>state["Home1"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home1"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Flex71Props = useStore((state)=>state["Home1"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home1"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Div76Props = useStore((state)=>state["Home1"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home1"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div77Props = useStore((state)=>state["Home1"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["Home1"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Div78Props = useStore((state)=>state["Home1"]["Div78"]);
const Div78IoProps = useIoStore((state)=>state["Home1"]["Div78"]);
const Div78Cb = useDiv78Cb()
const Flex72Props = useStore((state)=>state["Home1"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home1"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home1"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home1"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex78Props = useStore((state)=>state["Home1"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home1"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex63Props = useStore((state)=>state["Home1"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home1"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Div67Props = useStore((state)=>state["Home1"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home1"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Div68Props = useStore((state)=>state["Home1"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Home1"]["Div68"]);
const Div68Cb = useDiv68Cb()
const Div70Props = useStore((state)=>state["Home1"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Home1"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Flex64Props = useStore((state)=>state["Home1"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home1"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Div69Props = useStore((state)=>state["Home1"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home1"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div71Props = useStore((state)=>state["Home1"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["Home1"]["Div71"]);
const Div71Cb = useDiv71Cb()
const Div72Props = useStore((state)=>state["Home1"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["Home1"]["Div72"]);
const Div72Cb = useDiv72Cb()
const Flex82Props = useStore((state)=>state["Home1"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home1"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex62Props = useStore((state)=>state["Home1"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home1"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Div63Props = useStore((state)=>state["Home1"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home1"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Div64Props = useStore((state)=>state["Home1"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home1"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Div65Props = useStore((state)=>state["Home1"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home1"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div98Props = useStore((state)=>state["Home1"]["Div98"]);
const Div98IoProps = useIoStore((state)=>state["Home1"]["Div98"]);
const Div98Cb = useDiv98Cb()
const Image66Props = useStore((state)=>state["Home1"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home1"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox117Props = useStore((state)=>state["Home1"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home1"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home1"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home1"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home1"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home1"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home1"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home1"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home1"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home1"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Button24Props = useStore((state)=>state["Home1"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home1"]["Button24"]);
const Button24Cb = useButton24Cb()
const Button25Props = useStore((state)=>state["Home1"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["Home1"]["Button25"]);
const Button25Cb = useButton25Cb()
const Image94Props = useStore((state)=>state["Home1"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home1"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox178Props = useStore((state)=>state["Home1"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home1"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home1"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home1"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Div97Props = useStore((state)=>state["Home1"]["Div97"]);
const Div97IoProps = useIoStore((state)=>state["Home1"]["Div97"]);
const Div97Cb = useDiv97Cb()
const TextBox232Props = useStore((state)=>state["Home1"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["Home1"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Image131Props = useStore((state)=>state["Home1"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["Home1"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["Home1"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["Home1"]["Image132"]);
const Image132Cb = useImage132Cb()
const Image133Props = useStore((state)=>state["Home1"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["Home1"]["Image133"]);
const Image133Cb = useImage133Cb()
const Image134Props = useStore((state)=>state["Home1"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["Home1"]["Image134"]);
const Image134Cb = useImage134Cb()
const Image95Props = useStore((state)=>state["Home1"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home1"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image100Props = useStore((state)=>state["Home1"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Home1"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox181Props = useStore((state)=>state["Home1"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home1"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Home1"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home1"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Button28Props = useStore((state)=>state["Home1"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["Home1"]["Button28"]);
const Button28Cb = useButton28Cb()
const TextBox184Props = useStore((state)=>state["Home1"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home1"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const Image101Props = useStore((state)=>state["Home1"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["Home1"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox185Props = useStore((state)=>state["Home1"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home1"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Home1"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home1"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["Home1"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home1"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Button29Props = useStore((state)=>state["Home1"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["Home1"]["Button29"]);
const Button29Cb = useButton29Cb()
const TextBox212Props = useStore((state)=>state["Home1"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home1"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Home1"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home1"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Image111Props = useStore((state)=>state["Home1"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Home1"]["Image111"]);
const Image111Cb = useImage111Cb()
const Image112Props = useStore((state)=>state["Home1"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Home1"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["Home1"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Home1"]["Image113"]);
const Image113Cb = useImage113Cb()
const Image115Props = useStore((state)=>state["Home1"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["Home1"]["Image115"]);
const Image115Cb = useImage115Cb()
const Image116Props = useStore((state)=>state["Home1"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["Home1"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["Home1"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Home1"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image118Props = useStore((state)=>state["Home1"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Home1"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox214Props = useStore((state)=>state["Home1"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home1"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const Image123Props = useStore((state)=>state["Home1"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Home1"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image124Props = useStore((state)=>state["Home1"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Home1"]["Image124"]);
const Image124Cb = useImage124Cb()
const Image125Props = useStore((state)=>state["Home1"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["Home1"]["Image125"]);
const Image125Cb = useImage125Cb()
const Image127Props = useStore((state)=>state["Home1"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home1"]["Image127"]);
const Image127Cb = useImage127Cb()
const Image128Props = useStore((state)=>state["Home1"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["Home1"]["Image128"]);
const Image128Cb = useImage128Cb()
const TextBox216Props = useStore((state)=>state["Home1"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home1"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Home1"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home1"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox220Props = useStore((state)=>state["Home1"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home1"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox222Props = useStore((state)=>state["Home1"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home1"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox224Props = useStore((state)=>state["Home1"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home1"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox226Props = useStore((state)=>state["Home1"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home1"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox228Props = useStore((state)=>state["Home1"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home1"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox230Props = useStore((state)=>state["Home1"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home1"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox218Props = useStore((state)=>state["Home1"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home1"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Home1"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home1"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox221Props = useStore((state)=>state["Home1"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Home1"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox223Props = useStore((state)=>state["Home1"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home1"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox225Props = useStore((state)=>state["Home1"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home1"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox227Props = useStore((state)=>state["Home1"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home1"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox229Props = useStore((state)=>state["Home1"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home1"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox231Props = useStore((state)=>state["Home1"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["Home1"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox215Props = useStore((state)=>state["Home1"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home1"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const Image119Props = useStore((state)=>state["Home1"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home1"]["Image119"]);
const Image119Cb = useImage119Cb()
const Image120Props = useStore((state)=>state["Home1"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home1"]["Image120"]);
const Image120Cb = useImage120Cb()
const Image121Props = useStore((state)=>state["Home1"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Home1"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["Home1"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Home1"]["Image122"]);
const Image122Cb = useImage122Cb()
const TextBox199Props = useStore((state)=>state["Home1"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home1"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const Image105Props = useStore((state)=>state["Home1"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Home1"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox200Props = useStore((state)=>state["Home1"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home1"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox206Props = useStore((state)=>state["Home1"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home1"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const Image107Props = useStore((state)=>state["Home1"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home1"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox201Props = useStore((state)=>state["Home1"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home1"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox207Props = useStore((state)=>state["Home1"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home1"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Image108Props = useStore((state)=>state["Home1"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home1"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox202Props = useStore((state)=>state["Home1"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home1"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox208Props = useStore((state)=>state["Home1"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home1"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Image106Props = useStore((state)=>state["Home1"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Home1"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox203Props = useStore((state)=>state["Home1"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home1"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox209Props = useStore((state)=>state["Home1"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home1"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const Image109Props = useStore((state)=>state["Home1"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Home1"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox204Props = useStore((state)=>state["Home1"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home1"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox210Props = useStore((state)=>state["Home1"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home1"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Image110Props = useStore((state)=>state["Home1"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Home1"]["Image110"]);
const Image110Cb = useImage110Cb()
const TextBox205Props = useStore((state)=>state["Home1"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home1"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox211Props = useStore((state)=>state["Home1"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home1"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox188Props = useStore((state)=>state["Home1"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home1"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home1"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home1"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Image102Props = useStore((state)=>state["Home1"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["Home1"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox190Props = useStore((state)=>state["Home1"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home1"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Home1"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home1"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox193Props = useStore((state)=>state["Home1"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home1"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Image103Props = useStore((state)=>state["Home1"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Home1"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox192Props = useStore((state)=>state["Home1"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home1"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox194Props = useStore((state)=>state["Home1"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home1"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Home1"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home1"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const Image104Props = useStore((state)=>state["Home1"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Home1"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox196Props = useStore((state)=>state["Home1"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home1"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home1"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home1"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home1"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home1"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()

  return (<>
  <Flex1 className="p-Home1 Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image1 className="p-Home1 Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<Flex1 className="p-Home1 Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox1 className="p-Home1 TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox1 className="p-Home1 TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox1 className="p-Home1 TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox1 className="p-Home1 TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox1 className="p-Home1 TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Button1 className="p-Home1 Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
<Button1 className="p-Home1 Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex1>
</Flex1>
<Div1 className="p-Home1 Div98 bpt" {...Div98Props} {...Div98Cb} {...Div98IoProps}/>
<Flex1 className="p-Home1 Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div1 className="p-Home1 Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<TextBox1 className="p-Home1 TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox1 className="p-Home1 TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Div1 className="p-Home1 Div97 bpt" {...Div97Props} {...Div97Cb} {...Div97IoProps}/>
<Div1 className="p-Home1 Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Image1 className="p-Home1 Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Div1>
<Flex1 className="p-Home1 Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox1 className="p-Home1 TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<Image1 className="p-Home1 Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<Image1 className="p-Home1 Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<Image1 className="p-Home1 Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<Image1 className="p-Home1 Image134 bpt" {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
</Flex1>
</Div1>
<Image1 className="p-Home1 Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image1 className="p-Home1 Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<Div1 className="p-Home1 Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<TextBox1 className="p-Home1 TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox1 className="p-Home1 TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox1 className="p-Home1 TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<Button1 className="p-Home1 Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-Home1 Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Div1 className="p-Home1 Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<TextBox1 className="p-Home1 TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox1 className="p-Home1 TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox1 className="p-Home1 TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<Button1 className="p-Home1 Button29 bpt" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
</Div1>
<Image1 className="p-Home1 Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox1 className="p-Home1 TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox1 className="p-Home1 TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Flex1 className="p-Home1 Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Div1 className="p-Home1 Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<Image1 className="p-Home1 Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<TextBox1 className="p-Home1 TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox1 className="p-Home1 TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox1 className="p-Home1 TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Div1>
<Div1 className="p-Home1 Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<Image1 className="p-Home1 Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<TextBox1 className="p-Home1 TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox1 className="p-Home1 TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<TextBox1 className="p-Home1 TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
</Div1>
<Div1 className="p-Home1 Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Image1 className="p-Home1 Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox1 className="p-Home1 TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox1 className="p-Home1 TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox1 className="p-Home1 TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
</Div1>
</Flex1>
</Flex1>
<Flex1 className="p-Home1 Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox1 className="p-Home1 TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<Flex1 className="p-Home1 Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Div1 className="p-Home1 Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Image1 className="p-Home1 Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<TextBox1 className="p-Home1 TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox1 className="p-Home1 TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
</Div1>
<Div1 className="p-Home1 Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}>
<Image1 className="p-Home1 Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox1 className="p-Home1 TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox1 className="p-Home1 TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
</Div1>
<Div1 className="p-Home1 Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<Image1 className="p-Home1 Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<TextBox1 className="p-Home1 TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox1 className="p-Home1 TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-Home1 Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Div1 className="p-Home1 Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Image1 className="p-Home1 Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<TextBox1 className="p-Home1 TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox1 className="p-Home1 TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Div1>
<Div1 className="p-Home1 Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}>
<Image1 className="p-Home1 Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
<TextBox1 className="p-Home1 TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox1 className="p-Home1 TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Div1>
<Div1 className="p-Home1 Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}>
<Image1 className="p-Home1 Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
<TextBox1 className="p-Home1 TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<TextBox1 className="p-Home1 TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Div1>
</Flex1>
</Flex1>
<Div1 className="p-Home1 Div73 bpt" {...Div73Props} {...Div73Cb} {...Div73IoProps}>
<Flex1 className="p-Home1 Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox1 className="p-Home1 TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox1 className="p-Home1 TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image1 className="p-Home1 Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
<Image1 className="p-Home1 Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<Div1 className="p-Home1 Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<Flex1 className="p-Home1 Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image1 className="p-Home1 Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<Image1 className="p-Home1 Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image1 className="p-Home1 Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
<Image1 className="p-Home1 Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex1>
</Div1>
</Flex1>
</Div1>
<Flex1 className="p-Home1 Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Div1 className="p-Home1 Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<Image1 className="p-Home1 Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
<TextBox1 className="p-Home1 TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<Flex1 className="p-Home1 Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Image1 className="p-Home1 Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<Image1 className="p-Home1 Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<Image1 className="p-Home1 Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<Image1 className="p-Home1 Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<Image1 className="p-Home1 Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-Home1 Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<TextBox1 className="p-Home1 TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox1 className="p-Home1 TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox1 className="p-Home1 TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox1 className="p-Home1 TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox1 className="p-Home1 TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<TextBox1 className="p-Home1 TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox1 className="p-Home1 TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox1 className="p-Home1 TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
</Div1>
<Div1 className="p-Home1 Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<TextBox1 className="p-Home1 TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox1 className="p-Home1 TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox1 className="p-Home1 TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox1 className="p-Home1 TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox1 className="p-Home1 TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<TextBox1 className="p-Home1 TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
<TextBox1 className="p-Home1 TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox1 className="p-Home1 TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Div1>
<Div1 className="p-Home1 Div78 bpt" {...Div78Props} {...Div78Cb} {...Div78IoProps}>
<TextBox1 className="p-Home1 TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<Flex1 className="p-Home1 Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image1 className="p-Home1 Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<Image1 className="p-Home1 Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex1>
<Flex1 className="p-Home1 Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Image1 className="p-Home1 Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
<Image1 className="p-Home1 Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
</Flex1>
</Div1>
</Flex1>
  </>);
}
