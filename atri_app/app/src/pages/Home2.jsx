import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex53Cb, useDiv53Cb, useFlex54Cb, useDiv54Cb, useDiv55Cb, useDiv56Cb, useFlex55Cb, useFlex56Cb, useFlex81Cb, useFlex48Cb, useDiv45Cb, useDiv46Cb, useDiv47Cb, useDiv48Cb, useFlex49Cb, useFlex50Cb, useDiv49Cb, useDiv50Cb, useDiv51Cb, useDiv52Cb, useFlex83Cb, useFlex51Cb, useFlex52Cb, useImage67Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useButton26Cb, useButton27Cb, useImage84Cb, useTextBox152Cb, useImage85Cb, useImage86Cb, useImage87Cb, useImage88Cb, useImage89Cb, useTextBox153Cb, useTextBox154Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useImage90Cb, useImage91Cb, useImage92Cb, useImage93Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useImage68Cb, useTextBox136Cb, useTextBox137Cb, useTextBox170Cb, useImage70Cb, useTextBox140Cb, useTextBox141Cb, useTextBox171Cb, useImage71Cb, useTextBox142Cb, useTextBox143Cb, useTextBox172Cb, useImage72Cb, useTextBox144Cb, useTextBox145Cb, useTextBox173Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox134Cb, useTextBox135Cb, useImage69Cb, useTextBox138Cb, useTextBox139Cb, useTextBox174Cb, useImage73Cb, useTextBox146Cb, useTextBox147Cb, useTextBox175Cb, useImage74Cb, useTextBox148Cb, useTextBox150Cb, useTextBox176Cb, useImage75Cb, useTextBox149Cb, useTextBox151Cb, useTextBox177Cb, useImage76Cb, useImage77Cb, useImage78Cb, useImage79Cb, useImage80Cb, useImage81Cb, useImage82Cb, useImage83Cb } from "../page-cbs/Home2";
import "../page-css/Home2.css";
import "../custom/Home2";

export default function Home2() {
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

  const Flex45Props = useStore((state)=>state["Home2"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home2"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home2"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home2"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home2"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home2"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex53Props = useStore((state)=>state["Home2"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home2"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div53Props = useStore((state)=>state["Home2"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home2"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex54Props = useStore((state)=>state["Home2"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home2"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Div54Props = useStore((state)=>state["Home2"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home2"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Div55Props = useStore((state)=>state["Home2"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home2"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Div56Props = useStore((state)=>state["Home2"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["Home2"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Flex55Props = useStore((state)=>state["Home2"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home2"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home2"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home2"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex81Props = useStore((state)=>state["Home2"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home2"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex48Props = useStore((state)=>state["Home2"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home2"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Div45Props = useStore((state)=>state["Home2"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home2"]["Div45"]);
const Div45Cb = useDiv45Cb()
const Div46Props = useStore((state)=>state["Home2"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home2"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div47Props = useStore((state)=>state["Home2"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home2"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div48Props = useStore((state)=>state["Home2"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Home2"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Flex49Props = useStore((state)=>state["Home2"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home2"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home2"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home2"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Div49Props = useStore((state)=>state["Home2"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home2"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Div50Props = useStore((state)=>state["Home2"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home2"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["Home2"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home2"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Div52Props = useStore((state)=>state["Home2"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home2"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Flex83Props = useStore((state)=>state["Home2"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home2"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex51Props = useStore((state)=>state["Home2"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home2"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["Home2"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home2"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Image67Props = useStore((state)=>state["Home2"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home2"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox122Props = useStore((state)=>state["Home2"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home2"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home2"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home2"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home2"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home2"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home2"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home2"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home2"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home2"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const Button26Props = useStore((state)=>state["Home2"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["Home2"]["Button26"]);
const Button26Cb = useButton26Cb()
const Button27Props = useStore((state)=>state["Home2"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["Home2"]["Button27"]);
const Button27Cb = useButton27Cb()
const Image84Props = useStore((state)=>state["Home2"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home2"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox152Props = useStore((state)=>state["Home2"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Home2"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const Image85Props = useStore((state)=>state["Home2"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home2"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image86Props = useStore((state)=>state["Home2"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home2"]["Image86"]);
const Image86Cb = useImage86Cb()
const Image87Props = useStore((state)=>state["Home2"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Home2"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image88Props = useStore((state)=>state["Home2"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home2"]["Image88"]);
const Image88Cb = useImage88Cb()
const Image89Props = useStore((state)=>state["Home2"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home2"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox153Props = useStore((state)=>state["Home2"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home2"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["Home2"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home2"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["Home2"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home2"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home2"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home2"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home2"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home2"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home2"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home2"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["Home2"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home2"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home2"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home2"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Home2"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home2"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home2"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home2"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home2"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home2"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["Home2"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home2"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["Home2"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home2"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["Home2"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home2"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Home2"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home2"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home2"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home2"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home2"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home2"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image90Props = useStore((state)=>state["Home2"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Home2"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["Home2"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home2"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["Home2"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home2"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["Home2"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Home2"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox127Props = useStore((state)=>state["Home2"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home2"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home2"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home2"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home2"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home2"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home2"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home2"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Image68Props = useStore((state)=>state["Home2"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home2"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox136Props = useStore((state)=>state["Home2"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home2"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home2"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home2"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox170Props = useStore((state)=>state["Home2"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home2"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image70Props = useStore((state)=>state["Home2"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home2"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox140Props = useStore((state)=>state["Home2"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home2"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home2"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home2"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox171Props = useStore((state)=>state["Home2"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home2"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image71Props = useStore((state)=>state["Home2"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home2"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox142Props = useStore((state)=>state["Home2"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home2"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Home2"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home2"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox172Props = useStore((state)=>state["Home2"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home2"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image72Props = useStore((state)=>state["Home2"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home2"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox144Props = useStore((state)=>state["Home2"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home2"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["Home2"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home2"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox173Props = useStore((state)=>state["Home2"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home2"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox131Props = useStore((state)=>state["Home2"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home2"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home2"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home2"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home2"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home2"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home2"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home2"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home2"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home2"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image69Props = useStore((state)=>state["Home2"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home2"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox138Props = useStore((state)=>state["Home2"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home2"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home2"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home2"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox174Props = useStore((state)=>state["Home2"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home2"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image73Props = useStore((state)=>state["Home2"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Home2"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox146Props = useStore((state)=>state["Home2"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home2"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["Home2"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home2"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox175Props = useStore((state)=>state["Home2"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home2"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image74Props = useStore((state)=>state["Home2"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home2"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox148Props = useStore((state)=>state["Home2"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home2"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox150Props = useStore((state)=>state["Home2"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home2"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox176Props = useStore((state)=>state["Home2"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home2"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Image75Props = useStore((state)=>state["Home2"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home2"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox149Props = useStore((state)=>state["Home2"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home2"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox151Props = useStore((state)=>state["Home2"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home2"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox177Props = useStore((state)=>state["Home2"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home2"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Image76Props = useStore((state)=>state["Home2"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home2"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home2"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home2"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["Home2"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home2"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image79Props = useStore((state)=>state["Home2"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home2"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["Home2"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Home2"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image81Props = useStore((state)=>state["Home2"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Home2"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image82Props = useStore((state)=>state["Home2"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Home2"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image83Props = useStore((state)=>state["Home2"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Home2"]["Image83"]);
const Image83Cb = useImage83Cb()

  return (<>
  <Flex2 className="p-Home2 Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image2 className="p-Home2 Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<Flex2 className="p-Home2 Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox2 className="p-Home2 TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox2 className="p-Home2 TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox2 className="p-Home2 TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox2 className="p-Home2 TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox2 className="p-Home2 TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex2>
<Flex2 className="p-Home2 Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Button2 className="p-Home2 Button27 bpt" {...Button27Props} {...Button27Cb} {...Button27IoProps}/>
<Button2 className="p-Home2 Button26 bpt" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Home2 Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<TextBox2 className="p-Home2 TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox2 className="p-Home2 TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<Flex2 className="p-Home2 Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox2 className="p-Home2 TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox2 className="p-Home2 TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox2 className="p-Home2 TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox2 className="p-Home2 TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox2 className="p-Home2 TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex2>
<Flex2 className="p-Home2 Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Div2 className="p-Home2 Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<TextBox2 className="p-Home2 TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<Image2 className="p-Home2 Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<TextBox2 className="p-Home2 TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox2 className="p-Home2 TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Div2>
<Div2 className="p-Home2 Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<TextBox2 className="p-Home2 TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Image2 className="p-Home2 Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox2 className="p-Home2 TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox2 className="p-Home2 TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Div2>
<Div2 className="p-Home2 Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox2 className="p-Home2 TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Image2 className="p-Home2 Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<TextBox2 className="p-Home2 TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox2 className="p-Home2 TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Div2>
<Div2 className="p-Home2 Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<TextBox2 className="p-Home2 TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Image2 className="p-Home2 Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox2 className="p-Home2 TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox2 className="p-Home2 TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-Home2 Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Div2 className="p-Home2 Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox2 className="p-Home2 TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<Image2 className="p-Home2 Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<TextBox2 className="p-Home2 TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox2 className="p-Home2 TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Div2>
<Div2 className="p-Home2 Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<TextBox2 className="p-Home2 TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<Image2 className="p-Home2 Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<TextBox2 className="p-Home2 TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox2 className="p-Home2 TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Div2>
<Div2 className="p-Home2 Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<TextBox2 className="p-Home2 TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<Image2 className="p-Home2 Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<TextBox2 className="p-Home2 TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox2 className="p-Home2 TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Div2>
<Div2 className="p-Home2 Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox2 className="p-Home2 TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<Image2 className="p-Home2 Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<TextBox2 className="p-Home2 TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox2 className="p-Home2 TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
</Div2>
</Flex2>
<TextBox2 className="p-Home2 TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox2 className="p-Home2 TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<Flex2 className="p-Home2 Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Flex2 className="p-Home2 Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Image2 className="p-Home2 Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<Image2 className="p-Home2 Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Image2 className="p-Home2 Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<Image2 className="p-Home2 Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex2>
<Flex2 className="p-Home2 Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image2 className="p-Home2 Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<Image2 className="p-Home2 Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Image2 className="p-Home2 Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Image2 className="p-Home2 Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Home2 Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Div2 className="p-Home2 Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Image2 className="p-Home2 Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox2 className="p-Home2 TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<Flex2 className="p-Home2 Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Image2 className="p-Home2 Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Image2 className="p-Home2 Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
<Image2 className="p-Home2 Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<Image2 className="p-Home2 Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<Image2 className="p-Home2 Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex2>
</Div2>
<Div2 className="p-Home2 Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox2 className="p-Home2 TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox2 className="p-Home2 TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox2 className="p-Home2 TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox2 className="p-Home2 TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox2 className="p-Home2 TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox2 className="p-Home2 TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox2 className="p-Home2 TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox2 className="p-Home2 TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Div2>
<Div2 className="p-Home2 Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox2 className="p-Home2 TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox2 className="p-Home2 TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox2 className="p-Home2 TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox2 className="p-Home2 TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox2 className="p-Home2 TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<TextBox2 className="p-Home2 TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox2 className="p-Home2 TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox2 className="p-Home2 TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Div2>
<Div2 className="p-Home2 Div56 bpt" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<TextBox2 className="p-Home2 TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Flex2 className="p-Home2 Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image2 className="p-Home2 Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<Image2 className="p-Home2 Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex2>
<Flex2 className="p-Home2 Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image2 className="p-Home2 Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Image2 className="p-Home2 Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex2>
</Div2>
</Flex2>
  </>);
}
