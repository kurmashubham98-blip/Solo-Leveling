import { useEffect, useState } from 'react';
import { PlayerHUD } from '../components/PlayerHUD';
import { QuestList } from '../components/QuestList';
import { ActivityGrid } from '~/components/ActivityGrid';
import { StatsSummary } from '../components/StatsSummary';
import { api } from 'axios'; // Note: Using api from ../services/api instead. Corrected below.
import { api as myApi } from '../services/api';
import { Modal } from '../components/ui/modal';
import { Button } from '../components/ui/button';

export const Dashboard = () => {
  const [player, setPlayer] = useState<any>(null);
  const [quests, setQuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [lastReward, setLastReward] = useState(0);

  const fetchData = async () => {
    try {
      const user = await myApi.post(`n/api/auth/login`; // myApi ha…¹‘±•Ì‰…Í”UI0‰ÕÐ±•ÐÌ¡•¬…Á¤¹ÑÌ¸e•Ì°…Á¤¹ÑÌ…‘‘Ì‰…Í”¸M¼½¹±ä€½…ÕÑ ½±½¥¸¸)9½Ñ”èµåÁ¤¥µÁ±•µ•¹Ñ…Ñ¥½¸¥¸…Á¤¹ÑÌ‘½•Ì¹½ÐÉ•ÅÕ¥É”‰…­Ñ¥­Ì™½È•¹‘Á½¥¹ÑÌ¥˜Ñ¡•ä…É”ÍÑÉ¥¹Ì¸€(€€€€€€€¼¼]…¥Ð°…Á¤¹ÑÌÁÉ•Á•¹‘ÌA%}UI0¸M¼€ˆ½…ÕÑ ½±½¥¸ˆ¥Ì½ÉÉ•Ð¸(€€€€€€€¼¼	ÕÐ¡•É”°$¹••Ñ¼•¹ÍÕÉ”Ñ¡”½‘”¥Ì½ÉÉ•Ñ±äÕÍ¥¹œÑ¡”¥µÁ½ÉÑ•…Á¤¸(€€€€€€½¹ÍÐÕÍ•È€ô…Ý…¥ÐµåÁ¤¹Á½ÍÐ œ½…ÕÑ ½±½¥¸œ°ìÕÍ•É¹…µ”è€M¡…‘½Üœô¤ì(€€€€€€Í•ÑA±…å•È¡ÕÍ•È¤ì(€€€€€€½¹ÍÐÕÍ•ÉEÕ•ÍÑÌ€ô…Ý…¥ÐµåÁ¤¹•Ð¡€½ÅÕ•ÍÑÌ¼‘íÕÍ•È¹¥‘õ€¤ì(€€€€€€Í•ÑEÕ•ÍÑÌ¡ÕÍ•ÉEÕ•ÍÑÌ¤ì(€€€€€€Í•Ñ1½…‘¥¹œ¡™…±Í”¤ì(€€€ô…Ñ €¡•') { console.error(eIÈ¤ìô(€ôì((€ÕÍ•™™•Ð  ¤€ôøì™•Ñ¡…Ñ„ ¤ìô°mt¤ì((€½¹ÍÐ¡…¹‘±•½µÁ±•Ñ”€ô…Íå¹Œ€¡ÅÕ•ÍÑ%è¹Õµ‰•È¤€ôøì(€€€¥˜€ …Á±…å•È¤É•ÑÕÉ¸ì(€€€ÑÉäì(€€€€€½¹ÍÐÉ•ÍÕ±Ð€ô…Ý…¥ÐµåÁ¤¹Á½ÍÐ¡€½ÅÕ•ÍÑÌ¼‘íÅÕ•ÍÑ%‘ô½½µÁ±•Ñ•€°ìÕÍ•É%èÁ±…å•È¹¥ô¤ì(€€€€€¥˜€¡É•ÍÕ±Ð¹ÍÕ•ÍÌ¤ì(€€€€€€€Í•Ñ1…ÍÑI•Ý…É¡É•ÍÕ±Ð¹áÁ…¥¸¤ì(€€€€€€€Í•Ñ5½‘…±=Á•¸¡ÑÉÕ”¤ì(€€€€€€€™•Ñ¡…Ñ„ ¤ì€(€€€€€ô(€€€ô…Ñ €¡•ÉÈ¤ì½¹Í½±”¹•ÉÉ½È¡•ÉÈ¤ìô(€ôì((€¥˜€¡±½…‘¥¹œñð€…Á±…å•È¤É•ÑÕÉ¸€ñ‘¥Ø±…ÍÍ9…µ”ôÀ´ÈÀÑ•áÐµ•¹Ñ•È…¹¥µ…Ñ”µÁÕ±Í”Ñ•áÐµÁÉ¥µ…Éä™½¹Ðµµ½¹¼œù%9%Q%1%i%9MeMQ4¸¸¸ð½‘¥Øøì((€É•ÑÕÉ¸€ (€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÁˆ´ÈÀœø(€€€€€€€ñA±…å•É!UÁ±…å•ÈõíÁ±…å•Éô€¼ø(€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÉ¥±œéÉ¥µ½±Ì´Ì…À´àœø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô±œé½°µÍÁ…¸´ÈÍÁ…”µä´àœø(€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÍÁ…”µä´Èœø(€€€€€€€€€€€€€€€€ñ Ì±…ÍÍ9…µ”ôÑ•áÐµÍ´™½¹Ðµ¡•…‘¥¹œÑÉ…­¥¹œµÝ¥‘•ÈÑ•áÐµµÕÑ•µ™½É•É½Õ¹ÕÁÁ•É…Í”Á°´ÄœùMåÍÑ•´1½œð½ Ìø(€€€€€€€€€€€€€€€€ñÑ¥Ù¥ÑåÉ¥€¼ø(€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€ñEÕ•ÍÑ1¥ÍÐÅÕ•ÍÑÌõíÅÕ•ÍÑÍô½¹½µÁ±•Ñ”õí¡…¹‘±•½µÁ±•Ñ•ô€¼ø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÍÁ…”µä´àœø(€€€€€€€€€€€€€ñMÑ…ÑÍMÕµµ…ÉäÍÑ…ÑÌõíÁ±…å•È¹ÍÑ…ÑÍô€¼ø(€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰œµ…Éµ‰œ‰½É‘•È‰½É‘•ÈµµÕÑ•À´ØÉ½Õ¹‘•µÍ´ÍÁ…”µä´Ðœø(€€€€€€€€€€€€€€€€ñ Ì±…ÍÍ9…µ”ôÑ•áÐµÍ´™½¹Ðµ¡•…‘¥¹œÑÉ…­¥¹œµÝ¥‘•ÈÑ•áÐµµÕÑ•µ™½É•É½Õ¹ÕÁÁ•É…Í”‰½É‘•Èµˆ‰½É‘•ÈµµÕÑ•Áˆ´Èœù9½Ñ¥•Ìð½ Ìø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ôÑ•áÐµÍ´Ñ•áÐµµÕÑ•µ™½É•É½Õ¹œøñÍÁ…¸±…ÍÍ9…µ”ôÑ•áÐµÁÉ¥µ…ÉäœùmMeMQ5tð½ÍÁ…¸ø]•±½µ”‰…¬°A±…å•È¸…¥±ä‘Õ¹•½¹Ì¡…Ù”É•Í•Ð¸ð½Àø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ôÑ•áÐµÍ´Ñ•áÐµµÕÑ•µ™½É•É½Õ¹œøñÍÁ…¸±…ÍÍ9…µ”ôÑ•áÐµ‘…¹•Èœùm1IQtð½ÍÁ…¸ø€ÈÐ¡½ÕÉÌÉ•µ…¥¹¥¹œ™½È]••­±äEÕ•ÍÑÌ¸ð½Àø(€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€ð½‘¥Øø(€€€€€€€ñ5½‘…°¥Í=Á•¸õíµ½‘…±=Á•¹ô½¹±½Í”õì ¤€ôøÍ•Ñ5½‘…±=Á•¸¡™…±Í”¥ôÑ¥Ñ±”ôEUMP1IœÑåÁ”ôÍÕ•ÍÌœø(€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÑ•áÐµ•¹Ñ•ÈÍÁ…”µä´Øœø(€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ôÑ•áÐµµÕÑ•µ™½É•É½Õ¹œùe½Ô¡…Ù”ÍÕ•ÍÍ™Õ±±ä½µÁ±•Ñ•Ñ¡”µ…¹‘…Ñ”¸ð½Àø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ôÁä´Ðœøñ‘¥Ø±…ÍÍ9…µ”ôÑ•áÐ´Ñá°™½¹Ðµµ½¹¼Ñ•áÐµÁÉ¥µ…Éä…¹¥µ…Ñ”µ‰½Õ¹”œø­í±…ÍÑI•Ý…É‘ôa@ð½‘¥Øøð½‘¥Øø(€€€€€€€€€€€€ñ	ÕÑÑ½¸±…ÍÍ9…µ”ôÜµ™Õ±°œ½¹±¥¬õì ¤€ôøÍ•Ñ5½‘…±=Á•¸¡™…±Í”¥ôùAPI]Ið½	ÕÑÑ½¸ø(€€€€€€€€€ð½‘¥Øø(€€€€€€€ð½5½‘…°ø(€€€€ð½‘¥Øø(€€¤ì)ô