import React, { useState } from 'react'

const tji3_network_1 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362038/TJI_3_Networking_3_ttemy9.jpg"
const tji3_network_2 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362038/TJI_3_Networking_4_cb88bv.jpg"
const tji3_network_3 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362039/TJI_3_Networking_5_youeib.jpg"
const tji3_network_4 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362038/TJI_3_Networking_1_izbi8p.jpg"
const tji3_network_5 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362040/TJI_3_Networking_9_xkxys5.jpg"
const tji3_network_6 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362040/TJI_3_Networking_8_rbbe50.jpg"
const tji3_network_7 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362040/TJI_3_Networking_7_n2aid9.jpg"
const tji3_network_8 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362040/TJI_3_Networking_6_ozpxde.jpg"
const tji3_network_9 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362040/TJI_3_Networking_2_a9zxrr.jpg"
const tji3_network_10 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362041/TJI_3_Networking_10_m3rqpf.jpg"

const tji3_inauguration_1 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362814/TJI_3_Inauguration_10_xosifj.jpg"
const tji3_inauguration_3 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362776/TJI_3_Inauguration_8_zcx6rk.jpg"
const tji3_inauguration_6 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755362773/TJI_3_Inauguration_4_nhoidr.jpg"

const tji3_speaker_1 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755363141/TJI_3_Speakers_1_j6t2tg.jpg"
const tji3_speaker_2 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755363141/TJI_3_Speakers_2_cgodnh.jpg"
const tji3_speaker_3 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755363142/TJI_3_Speakers_3_hyyjhe.jpg"
const tji3_speaker_4 = "https://res.cloudinary.com/dnmljnbh7/image/upload/v1755363143/TJI_3_Speakers_4_usnkcy.jpg"

const tji3_speaker_5 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938909/TGI3_Speakers_15_h32esc.jpg"
const tji3_speaker_6 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938908/TGI3_Speakers_17_l9olsm.jpg"
const tji3_speaker_7 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938908/TGI3_Speakers_16_qmkgdg.jpg"
const tji3_speaker_8 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938908/TGI3_Speakers_14_ky1z1m.jpg"
const tji3_speaker_10 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938906/TGI3_Speakers_12_si6eot.jpg"
const tji3_speaker_11 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938905/TGI3_Speakers_11_x9gnah.jpg"
const tji3_speaker_12 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938905/TGI3_Speakers_20_aplznd.jpg"
const tji3_speaker_13 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938905/TGI3_Speakers_10_vef94f.jpg"


const tji3_website_3 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759426212/TJI_3_Website_2_rjeahx_oe71pm.jpg"


const tji3_discussion_1 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932605/TJI_3_Panel_Discussion_6_p6prlo.jpg"
const tji3_discussion_5 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932605/TJI_3_Panel_Discussion_4_dhoutx.jpg"
const tji3_discussion_8 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932603/TJI_3_Panel_Discussion_1_dtrqg0.jpg"
const tji3_discussion_19 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938936/TGI3_Speakers_24_vqrvjl.jpg"
const tji3_discussion_21 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938935/TGI3_Speakers_25_sqixf4.jpg"
const tji3_discussion_24 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755938934/TGI3_Speakers_21_xgciez.jpg"

const tji3_group_1 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932604/TJI_3_Group_5_owgfjg.jpg"
const tji3_group_2 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932604/TJI_3_Group_3_bnnwpj.jpg"
const tji3_group_3 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932604/TJI_3_Group_2_vr2d4k.jpg"
const tji3_group_5 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755932604/TJI_3_Group_6_tnp1xv.jpg"


const tji3_bb_1 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941088/TGI3_BiteandBites_12_i6i23h.jpg"
const tji3_bb_2 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941087/TGI3_BiteandBites_11_hdqhwr.jpg"
const tji3_bb_3 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941087/TGI3_BiteandBites_10_zhodot.jpg"
const tji3_bb_4 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941087/TGI3_BiteandBites_8_qbbrig.jpg"
const tji3_bb_5 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941086/TGI3_BiteandBites_6_vsif9q.jpg"
const tji3_bb_6 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941086/TGI3_BiteandBites_7_nwlqts.jpg"
const tji3_bb_7 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941084/TGI3_BiteandBites_1_ffxfzl.jpg"
const tji3_bb_8 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941084/TGI3_BiteandBites_2_vdtyqc.jpg"
const tji3_bb_9 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941084/TGI3_BiteandBites_5_bdn8up.jpg"
const tji3_bb_10 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941084/TGI3_BiteandBites_4_vbjcgr.jpg"
const tji3_bb_11 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941083/TGI3_BiteandBites_9_p7epsq.jpg"
const tji3_bb_12 = "https://res.cloudinary.com/dctcpt8tq/image/upload/v1755941083/TGI3_BiteandBites_3_f26dre.jpg"

import whatImg from "../assets/what.png"


const tji1GalleryData =
  [
    {
      label: "Networking",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522029/5S7B4280_gx3cgo.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522021/5S7B4238_lfvkq7.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522014/5S7B4234_gcouua.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522006/5S7B4255_uvx3fk.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521998/5S7B4269_giqb9g.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521991/5S7B4266_o1hs0a.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504747/Copy_of_L_5_d2vak6.png" },
      ],
    },
    {
      label: "The Start",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520471/5S7B4326_comkoy.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751909/start2_tji1_d2tmtf.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520468/5S7B4319_ld55sh.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520466/5S7B4372_ayisaf.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751970/start1_tji1_i61opd.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520467/5S7B4290_zl72ds.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752033/start_tji1_qjkvlu.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520464/5S7B4340_kstwoi.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520463/5S7B4334_hckdrt.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751855/start3_tji1_iotahl.mp4" },
      ],
    },
    {
      label: "Speakers",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520603/Anshuman_Backdrop_voxtht.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504683/Copy_of_C_xeprqj.png" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520690/5S7B4518_xd6nwf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520696/5S7B4514_crdfkh.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751735/speaker2_tji1_ca6wcn.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520633/M_P_Singh_Backdrop_pjoanz.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520625/5S7B4797_nbmzun.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520617/5S7B4833_stogtj.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504682/Copy_of_C_2_dkzont.png" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760763778/singer_speaker_tji1_iwl7x7.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520939/Sridevi_Varun_Backdrop_i89vfb.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520956/5S7B4480_kfblab.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520963/5S7B4454_gepvbf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520667/5S7B4450_zvnnz6.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520672/5S7B4452_knqibv.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751723/speaker1_tji1_o3yjqi.mp4" },
      ],
    },
    {
      label: "Panel Discussion",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521036/5S7B4850_edvfyl.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521027/5S7B4847_wa6mpy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521022/5S7B4883_b29mx1.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521017/5S7B4874_ghh7wf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521013/5S7B4871_cgyojp.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760521004/5S7B4865_hylb5y.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520999/5S7B4851_xcikzw.jpg" },

      ],
    },
    {
      label: "Launch",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593700/5S7B4370_yj4e6o.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593695/5S7B4365_vydbak.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593689/5S7B4366_jjeytw.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593707/5S7B4356_bln3f8.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593713/5S7B4359_rto1u7.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752108/launch_tji1_b596do.mp4" },
      ],
    },
    {
      label: "I am the Jewelry Ivangelyst",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593683/5S7B4921_ocvb8x.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593679/5S7B4919_mwo7dp.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593676/5S7B4926_extyp7.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593673/5S7B4949_psnyjx.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593670/5S7B4709_kjbxrr.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593499/5S7B4712_qk6rtv.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593269/5S7B4714_wiyfrl.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593265/5S7B4715_gxdtvb.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593262/5S7B4717_e55mmi.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593258/5S7B4719_dqvbfa.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593255/5S7B4720_iuipzn.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593251/5S7B4723_l4uba3.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593248/5S7B4900_prflwr.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593245/5S7B4901_gfcttq.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593241/5S7B4903_xk3fvn.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593238/5S7B4904_wbf9uy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593234/5S7B4905_f7ppb9.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593231/5S7B4908_ft39id.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593227/5S7B4911_ezb3bl.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593224/5S7B4917_wmtyrh.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593221/5S7B4913_geegtk.jpg" },
      ],
    },
    {
      label: "Active Audience",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520207/5S7B4298_npzu4r.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520211/5S7B4336_oxuqv8.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520214/5S7B4380_jshces.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520219/5S7B4588_a4l74s.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520222/5S7B4384_enoijr.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760520226/5S7B4292_tdqt8n.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760593014/5S7B4410_d8km50.jpg" },
      ],
    },
    {
      label: "Bits and Bytes",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760592969/5S7B4739_uwsqkd.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760592974/5S7B4740_icndda.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760592959/5S7B4741_cghq14.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760592954/5S7B4763_al23xf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760592941/5S7B4744_xktbs0.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522631/Copy_of_R_7_weyn6o.png" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522623/Copy_of_R_8_gzdt4b.png" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751755/bits2_tji1_ha1u8p.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751782/bits1_tji1_xqftyu.mp4" },

      ],
    },
    {
      label: "Group Photo",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522102/5S7B4929_cpvahv.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522083/5S7B4671_mrozd8.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522075/5S7B4930_ze4vsy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760522067/5S7B4668_ohc4wv.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504773/Copy_of_C_4_eivchl.png" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504769/Copy_of_C_3_iiyral.png" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504767/Copy_of_C_1_x8ahev.png" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1759504764/1_u9grdy.jpg" },
      ],
    },
  ];

const tji2GalleryData =
  [
    {
      label: "Networking",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615640/ZY9A0573_axxgtw.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615642/ZY9A0583_vpuz56.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615646/ZY9A0586_anvpzm.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615647/ZY9A0589_abr4br.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615648/ZY9A0591_wjwjaq.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615652/ZY9A0730_xgwyl5.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615652/ZY9A0737_upshhn.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615654/ZY9A0740_cmiwkv.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615656/ZY9A0534_abg6sg.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615659/ZY9A0556_oxds5n.jpg" },
      ],
    },
    {
      label: "The Start",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752757/ZY9A0612_iukckg.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752752/ZY9A0928_dqtfyz.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752740/ZY9A0603_jzmxt4.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752738/ZY9A0599_xjt4kc.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752618/start1_tji2_kipp6g.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752737/ZY9A0593_v3fw7n.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752640/start3_tji2_b5ztmh.mp4" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752752/tji2-introad_yxbvpn.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752755/ZY9A0644_vogqbk.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752749/ZY9A0643_fq5zpl.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752748/ZY9A0631_v20m2n.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760752745/ZY9A0632_pda0nq.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752652/start2_tji2_rtn09c.mp4" },
      ],
    },
    {
      label: "Speakers",
      items: [

        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615277/tji2-introap_zkdl0d.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615279/ZY9A0867_nehdzy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615282/ZY9A0863_dqtxoj.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615282/ZY9A0861_fgwlwy.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760758288/speaker_1_tji2_q61etc.mp4" },

        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615338/tji2-intropp_ys86f1.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615346/ZY9A0832_jzzw6g.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615349/ZY9A0814_ozekyt.jpg" }, ,
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615353/ZY9A0840_en00tz.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752786/speaker2_tji2_laxg7s.mp4" },

        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615375/tji2-introsans_rlatbi.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615375/ZY9A0896_lhulue.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615380/ZY9A0919_h0pm01.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615382/ZY9A0889_eljh73.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615384/ZY9A0898_iy0prf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615387/ZY9A0890_xcsup9.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615385/ZY9A0891_ofjwmb.jpg" },
      ],
    },
    {
      label: "Panel Discussion",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615247/tji2-introssid_g6umsv.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615251/ZY9A0669_cpuhyz.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615253/ZY9A0672_uzrx0p.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615253/ZY9A0671_sty0s5.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615258/ZY9A0720_a5vikn.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615258/ZY9A0673_getwaf.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615266/ZY9A0689_nbcr8h.jpg" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752531/panel1_tji2_osrlf8.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760752543/panel2_tji2_hxopv7.mp4" },
      ],
    },
    {
      label: "Active Audience",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615411/ZY9A0654_yyuih7.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615411/ZY9A0656_sf5rmg.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615414/ZY9A0605_ski9as.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615417/ZY9A0609_vx6zeh.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615418/ZY9A0610_c5rtws.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615442/ZY9A0613_hpouka.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615446/ZY9A0618_gasfbg.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615451/ZY9A0621_q1smxy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615453/ZY9A0630_crwzqv.jpg" },
      ],
    },
    {
      label: "Bits and Bytes",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615491/ZY9A0961_vicdcx.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615494/ZY9A0956_j5iddg.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615513/ZY9A0571_p7ib3f.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615596/ZY9A0967_ipt9xe.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615598/ZY9A0504_kxxxmy.jpg" },
      ],
    },
    {
      label: "Group Photo",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615462/ZY9A0484_tucw0z.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615464/ZY9A0519_yggk20.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615467/ZY9A0548_fwuvif.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615469/ZY9A0565_tab1rp.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615472/ZY9A0781_lcpxw4.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615475/ZY9A0786_sp0kvb.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615476/ZY9A1002_kb17sr.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615478/ZY9A0474_vgjhxi.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1760615480/ZY9A0481_j5mp3i.jpg" },

      ],
    },
    {
      label: "Testimonials",
      items: [
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751697/test1_tji2_ep0hlc.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751685/test4_tji2_hnhll5.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751679/test2_tji2_mx3gnf.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1760751675/test3_tji2_hd3szf.mp4" },
      ],
    }
  ];

import navinGraphics from "../assets/graphics/navin.jpg"
import neerajGraphics from "../assets/graphics/neeraj.jpg"
import udayGraphics from "../assets/graphics/uday.jpg"
import ashwinGraphics from "../assets/graphics/ashwin.jpg"
import conceptGraphics from "../assets/graphics/concept.jpg"
import giaGraphics from "../assets/graphics/gia.jpg"

const tji3GalleryData =
  [
    {
      label: "Networking",
      items: [
        // Replaced placeholder images with the original ones
        { type: "image", src: tji3_network_1 },
        { type: "image", src: tji3_network_2 },
        { type: "image", src: tji3_network_3 },
        { type: "image", src: tji3_network_4 },
        { type: "image", src: tji3_network_5 },
        { type: "image", src: tji3_network_6 },
        { type: "image", src: tji3_network_7 },
        { type: "image", src: tji3_network_8 },
        { type: "image", src: tji3_network_9 },
        { type: "image", src: tji3_network_10 },
        // Placeholder videos remain the same
        // { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756041718/int1_weuqor.mp4' },
        // { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756041970/int2_nig0nu.mp4' },
      ],
    },
    {
      label: "The start",
      items: [
        { type: "image", src: navinGraphics },
        { type: "image", src: tji3_inauguration_1 },
        { type: "image", src: tji3_inauguration_3 },
        { type: "image", src: tji3_inauguration_6 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756039153/Navin2_yujmh8.mp4' },
        { type: "image", src: tji3_speaker_6 },
        { type: "image", src: tji3_speaker_12 },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940568/IMG_4130_leu8rq.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940592/IMG_4128_wnwd8r.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940598/IMG_4129_wzd5aw.jpg" },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1758947245/v1_rbousx.mp4' },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940643/IMG_4179_o4zgx4.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940652/IMG_4181_h14ojy.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758940704/IMG_4178_rqcxjm.jpg" },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1759419095/video1_lryqxl.mp4' },
        // Placeholder videos remain the same
      ],
    },
    {
      label: "Speakers",
      items: [
        // { type: "image", src: tji3_speaker_15 },
        // { type: "image", src: tji3_speaker_18 },
        // { type: "image", src: tji3_speaker_19 },
        // { type: "image", src: tji3_speaker_20 },



        { type: "image", src: udayGraphics },
        { type: "image", src: tji3_speaker_10 },
        { type: "image", src: tji3_speaker_11 },
        { type: "image", src: tji3_speaker_13 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756039151/speaker2_yuieix.mp4' },
        // { type: "image", src: tji3_speaker_14 },

        { type: "image", src: neerajGraphics },
        { type: "image", src: tji3_speaker_5 },
        { type: "image", src: tji3_speaker_7 },
        { type: "image", src: tji3_speaker_8 },
        // { type: "image", src: tji3_speaker_9 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1759419092/video3_u5xzib.mp4' },

        { type: "image", src: ashwinGraphics },
        { type: "image", src: tji3_speaker_1 },
        { type: "image", src: tji3_speaker_2 },
        { type: "image", src: tji3_speaker_3 },
        // { type: "image", src: tji3_speaker_4 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756039150/speaker1_rb8try.mp4' },


        { type: "image", src: conceptGraphics },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942071/IMG_4451_hlccbg.jpg" },
        // { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942090/IMG_4450_oajutx.jpg" },
        // { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942118/IMG_4455_u3z3jd.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942126/IMG_4459_pageid.jpg" },
        // { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942141/IMG_4467_loixjt.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758942148/IMG_4468_jmcmad.jpg" },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1759419094/video2_rmczdp.mp4' },

        // Placeholder videos remain the same
      ],
    },
    {
      label: "Panel Discussion",
      items: [
        { type: "image", src: giaGraphics },
        { type: "image", src: tji3_discussion_1 },
        { type: "image", src: tji3_discussion_5 },
        { type: "image", src: tji3_discussion_21 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756039128/discussion2_iw9vjf.mp4' },
        // { type: "image", src: tji3_discussion_7 },

        // { type: "image", src: tji3_discussion_3 },
        { type: "image", src: tji3_discussion_8 },
        { type: "image", src: tji3_discussion_19 },
        { type: "image", src: tji3_discussion_24 },
        { type: "video", src: 'https://res.cloudinary.com/dctcpt8tq/video/upload/v1756039158/discussion1_t0b1id.mp4' },

        // { type: "image", src: tji3_discussion_2 },
        // { type: "image", src: tji3_discussion_4 },
        // { type: "image", src: tji3_discussion_9 },
        // { type: "image", src: tji3_discussion_10 },
        // { type: "image", src: tji3_discussion_11 },
        // { type: "image", src: tji3_discussion_12 },
        // { type: "image", src: tji3_discussion_13 },
        // { type: "image", src: tji3_discussion_14 },
        // { type: "image", src: tji3_discussion_15 },
        // { type: "image", src: tji3_discussion_16 },
        // { type: "image", src: tji3_discussion_17 },
        // { type: "image", src: tji3_discussion_18 },
        // { type: "image", src: tji3_discussion_20 },
        // { type: "image", src: tji3_discussion_22 },

        // { type: "image", src: tji3_discussion_23 },
        // Placeholder videos remain the same
      ],
    },
    {
      label: "Active Audience",
      items: [
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944855/IMG_4407_nrbqft.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944843/IMG_4342_hsgeyo.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944835/IMG_4339_el2qxq.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944744/IMG_4224_ei4fd0.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944736/IMG_4242_wudwiw.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944726/IMG_4225_yidew7.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758944716/IMG_4226_r3afra.jpg" },

        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758952369/IMG_4126_svfzmz.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758952298/IMG_4408_yngf2g.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758952291/IMG_4374_o7cq3n.jpg" },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758952232/IMG_4216_t7fmea.jpg" },
        // Placeholder videos remain the same
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758944825/IMG_4308_depkeh.mp4" },
        // { type: "video", src: placeholderVid },
      ],
    },
    {
      label: "Bits and Bytes",
      items: [
        { type: "image", src: tji3_bb_1 },
        { type: "image", src: tji3_bb_2 },
        { type: "image", src: tji3_bb_3 },
        { type: "image", src: tji3_bb_4 },
        { type: "image", src: tji3_bb_5 },
        { type: "image", src: tji3_bb_6 },
        { type: "image", src: tji3_bb_7 },
        { type: "image", src: tji3_bb_8 },
        { type: "image", src: tji3_bb_9 },
        { type: "image", src: tji3_bb_10 },
        { type: "image", src: tji3_bb_11 },
        { type: "image", src: tji3_bb_12 },
        { type: "image", src: "https://res.cloudinary.com/dctcpt8tq/image/upload/v1758945149/IMG_4273_peglvr.jpg" },
        // Placeholder videos remain the same
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758945716/00032_gkbhz1.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758945716/00031_lkapjh.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758952908/SaveClip.App_AQOgydxBZX9M4YvPz-IZwwBzhzGYwSuaQ8-7EKmpbX3c0HcW2Dx2Y7g2M2MRaLXT7uwoAFsEYPBTimefX3QcgMs09Bg6h3GlyMfd4CA_ie1ubd.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758952904/SaveClip.App_AQPkvczxra8MF-nIIEiLTu05uY9UFA5GQWoq6Ggcy5xZ3XIbmWlw-G0GpFJ8g6uvvcCzBHQd0nErPktf4xmFBQRxMUCObFHV4dd223g_i3mjry.mp4" },
        { type: "video", src: "https://res.cloudinary.com/dctcpt8tq/video/upload/v1758952902/SaveClip.App_AQOg8-TNokvDYovI5x2cUZGgJM7MU7GQde_bno0mrokPITQUt2ShL6bzzrTEEN53DK9wlSorkCKxuDIt1avSGCcw5vWXzuZpb4JZv6w_lvsdgb.mp4" },
      ],
    },
    {
      label: "Group Photo",
      items: [
        { type: "image", src: tji3_group_1 },
        { type: "image", src: tji3_group_2 },
        { type: "image", src: tji3_group_3 },
        // { type: "image", src: tji3_group_4 },
        { type: "image", src: tji3_group_5 },
        // Placeholder videos remain the same
        // { type: "video", src: placeholderVid },
        // { type: "video", src: placeholderVid },
      ],
    },
    {
      label: "Website Launch",
      items: [
        // { type: "image", src: tji3_website_1 },
        // { type: "image", src: tji3_website_2 },
        { type: "image", src: tji3_website_3 },
        // { type: "image", src: tji3_website_4 },
        // { type: "video", src: placeholderVid },
        // { type: "video", src: placeholderVid },
      ],
    },
  ];

const GalleryModal = ({ open, galleryData = [], onClose, onSelect, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedItems, setLoadedItems] = useState({}); // ✅ track loaded items

  if (!open) return null;

  const isTabbed =
    Array.isArray(galleryData) &&
    galleryData.length > 0 &&
    galleryData[0].hasOwnProperty("label");

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const currentItems = isTabbed ? galleryData[activeTab].items : galleryData;

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange?.(galleryData[index].items);
    setLoadedItems({}); // reset loaders when switching tab
  };

  // ✅ when an image or video finishes loading
  const handleLoaded = (index) => {
    setLoadedItems((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdrop}
    >
      <div
        className="relative top-5 bg-white p-4 rounded-lg max-w-6xl w-[90%] h-[68vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-gray-800 text-white rounded-full p-1 px-3 text-lg cursor-pointer hover:bg-black shadow-lg"
        >
          ✕
        </button>

        {/* Tabs */}
        {isTabbed && (
          <div className="flex flex-wrap border-b border-gray-200 mb-4">
            {galleryData.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => handleTabClick(index)}
                className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${activeTab === index
                  ? "border-b-2 border-yellow-500 text-yellow-600"
                  : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Items */}
        <div className="flex-grow overflow-y-auto">
          <div
            className={`${galleryData[activeTab]?.label === "Website Launch"
              ? "p-2"
              : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2"
              }`}
          >
            {currentItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative ${galleryData[activeTab]?.label === "Website Launch"
                  ? "h-[435px]"
                  : "w-full aspect-square"
                  } cursor-pointer overflow-hidden rounded-md border border-gray-200 group`}
                onClick={() => onSelect(item)}
              >
                {/* ✅ Loader overlay */}
                {!loadedItems[idx] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                    onLoad={() => handleLoaded(idx)}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${loadedItems[idx] ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    onLoadedData={() => handleLoaded(idx)}
                    className={`w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${loadedItems[idx] ? "opacity-100" : "opacity-0"
                      }`}
                    title={`video-preview-${idx}`}
                  />
                )}

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageModal = ({ items = [], currentIndex, onClose, onNavigate }) => {

  if (currentIndex === null || items.length === 0) return null;
  if (currentIndex < 0 || currentIndex >= items.length) return null;
  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:opacity-80"
      >
        &times;
      </button>

      {/* Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(currentIndex - 1);
        }}
        disabled={currentIndex === 0}
        className="absolute left-4 text-white text-5xl px-3 cursor-pointer py-1 bg-yellow-300/80 rounded-full pb-3 hover:bg-black disabled:opacity-40"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(currentIndex + 1);
        }}
        disabled={currentIndex === items.length - 1}
        className="absolute right-4 text-white text-5xl px-3 py-1 cursor-pointer bg-yellow-300/80 rounded-full pb-3 hover:bg-black disabled:opacity-40"
      >
        &#8594;
      </button>

      {/* Content */}
      <div className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        {currentItem?.type === "image" ? (
          <img
            src={currentItem.src}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        ) : currentItem?.type === "video" ? (
          <video
            src={currentItem.src}
            className="max-w-full max-h-full rounded-lg"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <p className="text-white">Unsupported media type</p>
        )}
      </div>
    </div>
  );
};

const What = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(false);


  // open gallery with correct data
  const openGallery = async (data) => {
    setLoadingGallery(true); // show loader

    // simulate loading (if you load from server, await the fetch here)
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty("label")) {
      setCurrentItems(data[0].items);
    } else {
      setCurrentItems(data);
    }

    setGalleryData(data);
    setShowGallery(true);
    setLoadingGallery(false); // hide loader
  };

  // when clicking an image inside gallery
  const handleSelect = (item) => {
    const index = currentItems.findIndex((i) => i.src === item.src);
    setSelectedItems(currentItems);  // all items to navigate inside modal
    setCurrentIndex(index);          // current image index
    setShowGallery(false);           // close gallery
    setShowImageModal(true);         // open image modal
  };

  const handleTabChange = (items) => {
    setCurrentItems(items); // ✅ sync current items with active tab
  };

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < currentItems.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="bg-black overflow-x-hidden text-white px-10 flex flex-col md:flex-row md:h-auto" id="what">
      <div className="w-1/2 mx-auto">
        <img src={whatImg} alt="" />
      </div>

      <div className="w-full md:w-1/2 md:pl-10 py-10">
        <h1 className="xa:text-8xl xb:text-5xl text-3xl font-montserrat lg:mb-5 text-yellow-400">what?</h1>
        <p className='lg:mt-5 mt-2 flex flex-col lg:gap-3 xa:text-xl xb:text-[15px] text-[12px] font-montserratLight'>
          A Jewellery Retailer’s sharing platform for those who desire to be doing things beyond
          the rigmarole of daily existence. The big differentiator in comparison to the other trade
          conferences would be that this would be for a small audience, focused and retail world,
          practical learnings and very useful to retailers from the mini metro’s.
          Created by Navin Sadarangani, the mission is to get together experience, knowledge and passion
          from the universe and infuse the same into the Jewellery Industry by focusing on three attributes -
          Design, Investment and Values.
          Each meet up will be around 4 to 5 hours of interactive learnings. There would be Passion and
          knowledge sharing, Skills Enhancement, Panel Discussions, various things that every individual
          retailer would experience.
          These learnings would come from real-world contemporaries on their subject of expertise. Retail
          Sales-people, Store Managers, Architects, Agency Heads, Actors, Business Owners, Directors,
          Publishers, Trade Body Heads, Home-makers, Laboratory Heads will be the source of learning.
        </p>

        <h1 className="xa:text-5xl xb:text-3xl text-2xl font-montserrat my-5 text-gray-400 text-center">Gallery</h1>
        <div className="flex flex-col sm:flex-row gap-8 items-start justify-center text-center mt-10 w-full">
          <div className="flex flex-col w-full sm:w-1/3 gap-2">
            <button
              className="cursor-pointer px-6 rounded-md py-3 w-full bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors shadow-lg"
              onClick={() => openGallery(tji1GalleryData)}
            >
              TJI1
            </button>
            <h1 className="text-gray-400">13th May '24</h1>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 gap-2">
            <button
              className="cursor-pointer px-6 rounded-md py-3 w-full bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors shadow-lg"
              onClick={() => openGallery(tji2GalleryData)}
            >
              TJI2
            </button>
            <h1 className="text-gray-400">8th August '24</h1>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 gap-2">
            <button
              className="cursor-pointer px-6 rounded-md py-3 w-full bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors shadow-lg"
              onClick={() => openGallery(tji3GalleryData)}
            >
              TJI3
            </button>
            <h1 className="text-gray-400">29th July '25</h1>
          </div>
        </div>

        {loadingGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Gallery Modal */}
        <GalleryModal
          open={showGallery}
          galleryData={galleryData}
          onClose={() => setShowGallery(false)}
          onSelect={handleSelect}
          onTabChange={handleTabChange}
        />

        {/* Image Modal */}
        {showImageModal && (
          <ImageModal
            items={selectedItems}
            currentIndex={currentIndex}
            onClose={() => setShowImageModal(false)}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
};

export default What;
