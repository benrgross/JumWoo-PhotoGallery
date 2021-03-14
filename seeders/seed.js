const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jumwoo", {
  useNewUrlParser: true,
});

const imageSeed = [
  {
    type: "exterior",
    description: "LA Terrace",
    image:
      "https://ucbf5458278fdb2cd879b0785a36.previews.dropboxusercontent.com/p/thumb/ABH2FCS_9Wp_NT7X6WVBYkWYr-MSNVHBZHhvI8lqyXci58oPL-yXfbDrFfpEKrI0Bv7xZG5SRI4BkHCuMtvGbnfOk0BPemuHkdvzkQv4kwwv0Xpe9T-cTipWPmmGyYLz_kAippEHdZgdnqIXVHbCP-Rh41BJH6COXRLHcakV1gn1EK9oCmGBB1mMDTFm_Ri-KXKa1M5SmrcL8rnFiJUKQHOzAdn6BRhVmjFWpqlofHjDmOnsI7OpDgdFkUeYqLUJg78MlgcxMbiTuzLmgC41iTs86JV9RPSZwcAX_btIqv5HKB1-TCCzqkki3M2RUqLCJr-GzumVX4WhBgKtX5QXoJqfAYLBsUL9rUukmGZE1MnKAA/p.jpeg?fv_content=true&size_mode=5",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image:
      "https://uc2b06552692b32cd55e6cade92a.previews.dropboxusercontent.com/p/thumb/ABGCejrA0e0fuAafUmocwE4L3PsKev8GtSqmu-Lh35zdr0IplrxtXBA8L_1i8s8RRZUb4Kjz7Pf9GgL9Z4eRjEN3b6c2Rp-MMdKRazlkMDd68uPRHSbY6dZoip7auDQOZJa4OrHVry-IdOu8PyPyC-ENZQMvxW_QM8jJHH39cp4svafbBqhtk6CKlwAbA_fw0G2sMsUwEZTF035HYrZoGf-3TzDQtT0CdQazgotbFqbZfh-LlYfSLKWKshBpAU8greKoaF0SceVG934qol-OmSbGUvBBSwaoQ57uzccxW8o3PRM9F3VRtTGYAXdi0EykGQWCIW_6cydP24ZTxjSv4mJahEnczw2Gs8ydgD12P8epzQ/p.jpeg?fv_content=true&size_mode=5",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image:
      "https://uc9bd44381764248557f97d352ea.previews.dropboxusercontent.com/p/thumb/ABFOC8ZxRRjp47ps0stavy7hl9kBph5KVm_LPkDu6fy5CLafG0cdghT5Uwi4uGZiL2r4NwrR2STjL0K7LbTing8V0HpDuxxw3C943gq-Ht3AXAI5NURMtHUOK9BgLlvJUoF5J1HGPezl45f-fMABEWR9bO6mxFJvT9DW5SlSYecPQ5PUKRIn25wBei4GjUMEaYni0yuKo7y536K8leSYlb-jafg6jb8gf4e7mWvXHPKBfzpmIXH87Fk-Tbk8_M6ZU1jq4s43pasia8fiU39s2PVmaIBIT8Y9KDXZ4lMqyHYLnD9yZa-zYOeahSxNvjJUpDlHvTgGzz-DjfBTC7t-wPvo_NSeAy18ueWRs1LcD8WQfPg6m5F1iEmgttuFTGkAKlk/p.jpeg?fv_content=true&size_mode=5",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Store Exterior",
    image:
      "https://uc5e728bf0eb571ffea5aba30cae.previews.dropboxusercontent.com/p/thumb/ABEnAuVpSrH9MlAv_I5VdLMuk_S3TyYA4GaCwjDu1rr3yksGVJhfI74q1g8iB_ULke5JLrkGILZrxJDZIUNvvgYE-qdJSBiwHRK12CgNoW3uC8YPEQeASMhtPAo7NaOC4h9094eVfjD7VCOW0srFL0njdj8kh68qVS9nThNaXRjfrc-PwzGzZYPztD1nsLaXFYdpqJhqfSmKlif1hovOD7OBE4SEJGR1rN4NQaNj0rqjmpztW6NjFdwz4oHTYCMDEXCTANBOa-IHdhmB_PWxALCvU5Cd8uW-lwDnRNcpk_4XDQYOLfSL0XNlFdzd8FbkErHRxIjcZTbIfqAJNRTX2yyWal92bTSgFaFgPUqTI0Ialg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Store Exterior",
    image:
      "https://uca06f6a73fcf9f64f0745a6a8a2.previews.dropboxusercontent.com/p/thumb/ABFbqdGlgpsC4xKsTuCGyRcqja3_7te32xN4L_uAtuRlssBIdzKH7EI7PJkPE8Gdm935WqV48JNl7bQxpMEnIo8FTWGoYN6IJNBc2UzEniZFXH9utfORyqEPZhQ0DvtLDvBuAcv16mgS1chiaFLGSbmcOg5vtTfZOpU1HqEIZd2HShfU7SS23nxBbED4q0j2Dybd6XHRwCa5SkYIkwT51XeMi97QnpFCjmCcDVPux4zx1UNGjhV8Pz1Fhuq0eT6LmbxU1v1ax6V0CZqdTd1mgbvUGEpwExtSVvY0PYFHNboAJrqia7bC90NbV5NIS-C847HA4PeIcwqDEvtYgqHjkfzTA8a__jjYLy3xSTcbRiE8UA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image:
      "https://uc2730a6064335f5dc5b65ea8be0.previews.dropboxusercontent.com/p/thumb/ABEa5Pe8uLLyUSlOGtvpXQlR5YrFpCFL25oYwCli3dbtZJBItcZ9q61eDBXTw4PJ72MvnS6yGEYzVjNsM4BQ5KR-Fjs97w0T15Fa0LMN0oaf9sUguxrHlLEDLgEiY3tqPq8XlCWSaz56EXtskdh6xZiycmh3wtFkqTtk7XER33kqDnzgI3ovM9mIQ6uttd_9iL7iS-muZ4KVsyCw3jF7ZzDO9fA8rqsjfogFIV3xZZsfj2z2P2YkdNEJE0XEEX8XGCG2vStcvs5Gw55-HTE7uv09b7LLiIJQjPMsv5w3bjlXcvE97Sq7mssu2jW4YlxTOJ1YuxcdBY0rN_isPd-O0hMXy3wFHV-slPhnmZoug9PIQA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image:
      "https://uc2730a6064335f5dc5b65ea8be0.previews.dropboxusercontent.com/p/thumb/ABEa5Pe8uLLyUSlOGtvpXQlR5YrFpCFL25oYwCli3dbtZJBItcZ9q61eDBXTw4PJ72MvnS6yGEYzVjNsM4BQ5KR-Fjs97w0T15Fa0LMN0oaf9sUguxrHlLEDLgEiY3tqPq8XlCWSaz56EXtskdh6xZiycmh3wtFkqTtk7XER33kqDnzgI3ovM9mIQ6uttd_9iL7iS-muZ4KVsyCw3jF7ZzDO9fA8rqsjfogFIV3xZZsfj2z2P2YkdNEJE0XEEX8XGCG2vStcvs5Gw55-HTE7uv09b7LLiIJQjPMsv5w3bjlXcvE97Sq7mssu2jW4YlxTOJ1YuxcdBY0rN_isPd-O0hMXy3wFHV-slPhnmZoug9PIQA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image:
      "https://uc654f49888998b10461510818ae.previews.dropboxusercontent.com/p/thumb/ABEEkPAT7sbWtGUCCkEl-3pogHJJjUrmUsGupXwCwt-AKU9VEqlJvPziITPGbR2ykM8vgVqYRdTJ4k_1bdZv78toWZPEG_UrAvYCX-0Q9Uu-ZfM3y4s3ibHeyl7UKN6zilFLzwd6c3JRtsXfGjJ986ndOI-2RYeXPJbB07PNFzaqIQRZp9Q4zdkXrU-8eQeZC_s3FDWV1kht_aPLNg8i9NSg-d225caYXjSbgI1m-KlqVYJVZtyuwFGPbUHEjmLNoRKYEHnw-DZ-eSJeworHrnA4yI3J8r0Ihzs0X0guiKd4XWZM4B16p8XHbl2rNEeo6uaFyy4bp1YIDj4Y3a2UUdYc0Q0WfjXiiDNfEqNY9qQ6HQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Modern Gate",
    image:
      "https://uc48dc6d3f4de2d703046547af7b.previews.dropboxusercontent.com/p/thumb/ABG_KQWIuArac0JwtWlapea03y16ahHpHpiR9YgBEu1UOJ9fLubFNf1lDIx6x5L8uAaj8o9tBs2NPlCQvbyjhIdLdToNYqgpg1_gyYHEWmaFJHduHr3_WU0oulLFfuJhCAj8VwsQwMjOQ30dqn3EkNV57KUOTrpOTDy6Bd4No3G2GV1siqyRR6PTg_V8vy7X3X_z74tRLTvt7nbNJWALOA0iCea5fJw--Yi60DJvuqQiMxRnhjUb-D5jkBRUXKeGQ7r7ek8bzIPCBtSBQZwhSIIgVPDPZcgGI0I-lkpSjpwBarwwyo095U4Tp5HpwR3c3qLGm8TZuJGp_hxnx7rWzcObD_QhLejLg7NRaoouOtiRPg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Public Structure",
    image:
      "https://uc908605787f786b2ffab73471e1.previews.dropboxusercontent.com/p/thumb/ABHWWR-uuxok59wyfHVWPpOJkqQ1KmgGrthVx-pgP9U3NBXv6rd-doqMnRLv61hpHNfPMjcwDdl_RWIjD_QYKjLOktAg7mM0km6DCz5NjXvUF27rDuwK8JMeekC5uocRZSgxQCjcQc5wM2QO0BI7c3EaartKJ1Sb2Q0dU304ekDssfU-Bz3lQJ0-J_QXdkRRFnNNjse3DOw-EYXa9MhAptUaAIQ9TUC25ez1_V7OjNDSGSJM4YL2kBo35Bvb8j4o3Ec1TH0laOVdgN6sf399jih-95fcW_hzyB_7KFskGfslj3zbPvpK5yaeBcwnxyNaGJVcaHJwHJru7u_mhS8dWsyN7OaLBhfyB9f8xZ2WdW8c5g/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building Facade - Ground Level",
    image:
      "https://uc94355ca3bdd7dd7fba7b70584f.previews.dropboxusercontent.com/p/thumb/ABFFXc7V-_aDi8m6KS5O2VbLFJNz3E8P3KlYbpBwGkJmE1g3wINPAji6T1iVuSnShMf_AdY4UkLqfLe3g0MIlhEFHK7_xr_gPpo7LswIiNimspJHBwAbfjDaRD8sjih6BxJ62AzNiK1QwHKuDWmOIz1Jbu492Y7V6c1ovk8bi_W8L7-QQIkya30HUxofqM7rOC5eRyl0R-vuZOzQMPEaQfp37Uw9cvQeEMxa_We1Bf_XkUPGyTF9DLpftf21g7LMYPPCPeB-zX2gf0K-CA2gtCfp8ft771k_SxNtvNNkN02dZ3l_OpmPDp4fQnj_0UzwMI-ase2zhs6_Tlh9Jy1Va-2gDx7qs1FVmqlD0Q4uIGu3tg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Bridge From Bellow",
    image:
      "https://ucb212d08fe0ea4e35ee35528e61.previews.dropboxusercontent.com/p/thumb/ABGS_Q3csnijpcyz9qJKRE_q4yN5-PjN96DHgrh6ZX4-EjNGVuIBFMcINS1_K2tY-ldupJaQDSKGJDD8TlFpRR4dl7ioQaaGDbFYYUU4ukaznOk6M1SPlZI34uj_DtcIu19rzNJnjKCinikm3TDmbJ3VI_RdpLRwgpxirFBheccxEO7q8YW-hKx96xlLTqwAjS-nceqdY3cNTRPSzmPsJVRmBIoridvIv-OgnC2b4xmAdppSn5yFYOWdTZOr89Apa2Lzpbh9gj2LVzMTimPVcjGwygOlF4vHk0kQxUZnjq3D-Xc9PlAkj15xMSac3_6NVukXECpUKr78Ydl0Ecx0djn_J7bY6uI0a-sTlyUYBD1I9g/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Modern Courtyard",
    image:
      "https://ucb212d08fe0ea4e35ee35528e61.previews.dropboxusercontent.com/p/thumb/ABGS_Q3csnijpcyz9qJKRE_q4yN5-PjN96DHgrh6ZX4-EjNGVuIBFMcINS1_K2tY-ldupJaQDSKGJDD8TlFpRR4dl7ioQaaGDbFYYUU4ukaznOk6M1SPlZI34uj_DtcIu19rzNJnjKCinikm3TDmbJ3VI_RdpLRwgpxirFBheccxEO7q8YW-hKx96xlLTqwAjS-nceqdY3cNTRPSzmPsJVRmBIoridvIv-OgnC2b4xmAdppSn5yFYOWdTZOr89Apa2Lzpbh9gj2LVzMTimPVcjGwygOlF4vHk0kQxUZnjq3D-Xc9PlAkj15xMSac3_6NVukXECpUKr78Ydl0Ecx0djn_J7bY6uI0a-sTlyUYBD1I9g/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Building Facade - Ground Level",
    image:
      "https://uc6f4127fe99bc14925bad3cd9c8.previews.dropboxusercontent.com/p/thumb/ABHAnY7yKz1ycHEy_57ZKvsbcf0s6hVj52S1tOMlXQNA5nlVUugmlkgIFEzSGqj3BlstAn0PHbcLCW7U53x0-fljgu1SbgjNgmy14k0_xG2vcIwLU5sDTC66CfLQtgadR3vtuWvqxlAvb32hVzCqlkP7vLsVz_xDL4sg5rUDpI7lUHB4g1oa51Ioeq2fdSmWDqM_OqKIT2J_evIJCeWYfRVeqFcaEcwzw8sh2Dau_LhyCoA-D7Alb4w1BXYrIHqen8WqEM7iPmRVYEN5g-xNa-XrNo-IlJtZu6IZdr4Qnv0FFTwkSsBOggx2aoLBHsVES2BnlpA0TeICkx7q1KVEaJYIknaTotf3YDONeCOLwBIImw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Modern Skywalk",
    image:
      "https://uc313d69bc8651db2316ae388bac.previews.dropboxusercontent.com/p/thumb/ABHU4LoHuBWjjzurGzFJtEtlh2oHi30xuFZ3KzIJG-ZLLNw8l_c2zBhbiEyLledivos5vfLZr5uq2bcgAUmHdLK3WGPMbt-WipIXZmbRosx-RcmUk8-ISZxSgDNH0jWW-gDqB3nDRGGGL5lpdulIwtwANHiXxgo9Bk8d10qasmwnvAdEMkaN6ftZDYdnNHAktHfse1VTD5cLbIwegEaBt5TlyGdIBSHCfbWZJ8N0ITWf3tR4aoM4P0U53YS8LGRk8Qeoz7X4epFUA0FDY7nZk9DjWNHt1LYwrEo5_Fqwv8_bTdux1ojOhA43SpD4Nb7LnFFTc6ZkJsoSUiJwD-zTSKBc6ZG9n9gDgNnSrCBheMFIhQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Facades Perspective",
    image:
      "https://uc539a35de46ade7cc308079b5ba.previews.dropboxusercontent.com/p/thumb/ABHi4FirumxBuDYG0DHPqhFbTm2hT5gzzXSRNe98Y4Q0wehWZA9ARYdNZoOk8GcftI_CQYun2kqsurVHheyJihUNYuPjIQc84gZDY7lLXOMZwQXwKcM-zvdPsq8GNLCSnM3GGaAYQJCH2LFX9QepxH-Rp2rlyhQxQyPDJAJVKorRMq0l_s4uZHERmIFtdOkkMsaPH_Hb5JiPLp6ICOfZlGhVO3m35cBCCAmBPlKT58rljUHxWXxOK40QExvsnX3CTjZfrMR2hYdnW1VeogAg3jg2NI9I_zRqZnoXHWbs9mK_r9khMjWw6RK4eyVjLZywzb4Ms-JTG7b0FytJ9gLiXPJWI-SMjVdr8BNVc9nXpvoEeA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Under A Pier",
    image:
      "https://uc2bd5242da5d261b3b9a13b6a57.previews.dropboxusercontent.com/p/thumb/ABFdWwGl7gTPoiUR5bEYLxg3aP4uedN9KZZthrmPXnG8KJxAQKD1Tww_phcu0zAr5kBaAr-4rE4f0alz_NjisUkcU5dYgAj84kSdunSV64f4yIklr0vvGlu1PvFdx7tlo_8kuPU94cEeaK89f7E-lrthJUfBA22a6IbyG7-En6MbJAGTteVb6b3cBIWN5BCQ0WVx3X23GC8-dS6THtwKXWfaHbOOfmDgTZAO8tVBVo7pdzf4rCS9psSSninZBAs8NR75oNjVoS8_ZdZJrRbf2nYxzDMAEtdKljWJBRndjJD29byP7Hdq0Kx5VLtVTxyjiPvYTG-VabwMk0GrMqNDtjRwM-UtIwCYPirhBc4csVCnXA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Facades Perspective",
    image:
      "https://uc588a4739d08e588dbbc7620506.previews.dropboxusercontent.com/p/thumb/ABHYFIiwES1c_K1BWRvXpCIOz9qRdMb4RXY6Pm6KBMVaXVmLkNt4iclCG1L-3DNi1ubbeq8_mTQmdy8gK82vXqhgJi8NoGGLfAO6RbUJfJBHyKGGVRV4zfkS_lhT3kw0114Q5MZtioNyDGkk2k5L2_6ZqBXxr3VkYnrPKeqQJakq0Ua3I41Dg9icc4uWHppvoywGVfjtcjDyfOd3nu5EpCV-aFAgrLTnl1oslKUl4gn8XHGbZUWfh2wCyCFMGAfG3jEduLY0b7d8p7cVKi0XDJWWjiz_8hHb01EXRi6dMkF-SPI2q57an0vEaBMjBKwhrjy-oWWiwLai1lmnElt7ct0_JM33a6ElFwJ1Dbgvrklx3A/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room",
    image:
      "https://uc9ba6264aaaf7e056d8fe4ff99d.previews.dropboxusercontent.com/p/thumb/ABGVdwWQLGjNFf19uDoG7ZhMyIPwdV06mQR7UGaMeRE6GlUB_Ii0mysCsIAWwt8n32a2FM7ZaVarxE3zHyj4viokqZv2EvUVgbtm2Z5nwex38z5ci9rYR0v16WtTkEskxWcFXCYxiMD2diCUp2GMfn3ZlA8cJQXMJYLsvgJVVrHP6FpvHsJ_d5DKl2nOqSOVfdMbLCunmVZtu3pMeu7za8uSeUyerXkJLJkvv8RcokbS9b6NOBxyFvA5DbGKmHe960Nyz51Za4SAsDpUfKExZTnw5vMhnRZot3FnMmW_VG9DFLga-Yd0fPO_-a9I3oK94Qmk5toRIXDvP2d5cShWl4c7pyiyr3hpPvOY3EoJ4CdADw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Dining Room to Ourdoor Patio",
    image:
      "https://uc81dee13936b9c77639d4817083.previews.dropboxusercontent.com/p/thumb/ABHfq8QkYAiR33bHBrcQEUZMj3n_GYi8rUnymrMyuHK1doO5aBwOBDIgVg0wSjrqfDKc_Tq-y4fl-Av7LwHR-I5sZ2pcrpqyoeBygHZ3zDOE_xne3uxIMrsLCKSeKSnA4-ZS42-SrWY2t8HhaZ1D0gUswfU8-0KvlsMbygEsPne84G5UJ5Aqgx5Z5Sge4NTEU1rvbWUTVbzNcqkwL4ewIWREFPNrzQCH7FzIOmvC5tKShZldn71CMq2bXN1x_00KqQorIiR4n-0aCBaOL8FrF4Ah6bdvxlha6RLNBvF-srR-9xdZcDZaogPDEYzsErbYuI5Z_aio0ERJUNojHSdLpb7LEREaw-cn74g3yC8BW85Phw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Master Bedroom",
    image:
      "https://uc52c818205161b8eb9c753ddf29.previews.dropboxusercontent.com/p/thumb/ABH3THQoY_K42Y299NIoylROkhjbXSWOLrQztKA0I6fnAsx0nCxl07RVsPyHAZFUjzbmF6F-IM47xO1I7f7ljt87yz7jBK_6LxsbXXMCoyz-WtuHjZptMiakPlZS22_bR1tkW0t8LX5NeV2t4ZO9GKKbntg24aE2YnYU8s5K4SSmbHoUdVFJ8HSTxOB9COAReHogo7XUFGAl7fTn2KzrynCRU9vYYor7DE97Qdua1AFQxe9OdrKn06L0MMMeLMmNPV6-8ZX_9avBEKF61o2GG8srTT3TrnXmG_U8NuoQVizV8MFtSVwJPxcJtRrtgmEAlwsH8uoeePzsaBemD9tFx4F7I9XEXkXglPT76kRwSl-_6w/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image:
      "https://uc96559050b069993fe11428837d.previews.dropboxusercontent.com/p/thumb/ABHy2U5LbBrRRfKJNAlquQgcqh9uVXaShaDnzbt7o7x5SQU_-Uyniq7HeFagjkhwFSlPJVBYdEcUYN_E83QfeTAmW_2LFH9UgzK53vdvFgjDbwFJ-8IJOsu3n8sgSpF34y1w9h6rs2uBd94uthELxGNoA01YBCUHkThRmgQndwfLy2amKSjo4EyflTPhrSI7CAIu0vUEoTHnnZzBVUnNoXP8AgntrKp7SvpAd_0oGjvSaboEuYg8yqw4eBwQm-gi1g17U1mBVWd62ScGrThiwT4mGAyj_hz4oXuR95vT0MkLqIxkcdK9c83udAdvUud73Elt7Lcnf0aF35gOPJDKQ3laJxotAEC90c4ddViwYQsK4Q/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image:
      "https://ucfd7e51c7e614fbe9a613c5437d.previews.dropboxusercontent.com/p/thumb/ABG-rHD9S9wA9VIQrLZU8CQoZTo6A733bcCETGfmnMKx32AoMZckP-nB4rJFR71tA7uYCD8UegbTFrJo3u68yy_qoBbw6Fvprt0YBqNNBlOsNQypvhOIx4vVXU8oZF7o4Zj-dZxbuinojpCx8iglJYPA0O6AqF2h8LO3QacoZxI1VROQ1Xw0D7kIrdiz66DCTCNiR8ljeH8CQaTMoWJlSO0-CMsvOFLB1bE4BA8K9WjqQiTR111Q6Ja7C8nc5buY1SfKfEr5s-j3GeEjl2Cgqsae3oExs1Hw9e_6u6BvJ3kMo-b-vBAHIvYCYNQF617hH_0-ZAQ3QkxqP0ORHol2_of4Urzh3wRdkExdGgJoKjLUAw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image:
      "https://uc430a66229362799c0da00d542f.previews.dropboxusercontent.com/p/thumb/ABG6QkJgn_HRt90U5TQCSxBO7GzEelOYWtFhSFlEcwUAufAJRsWmENPd0U_vfXgZ4c1seHl-Wu9drZDuKAhB_hn0c6kAqBOTQqoqBtEkHh-SZbDo4tuPkD61qxTtmjgH4XLBnfw7MyLitSIF6jrjXNp5dDiHKPtvFectAd5g5jhMC8xPg306YPyVtJ2E8JV0SLWhYzQQZN18_Ay-tfzseeb2Uh9orL0Rv_OO8Q4EndzIOqBXPvuc2GD_TX2B5nr_uX__jiynBrPRaaIfM4HCKv9W6VArSn1adKnZKoYNiMCkgil2wj1SG-ldOmcjS49uQquHd9qQjyPUm4cpnWalzu58O59Fzwp1n3d7WROs1ua7-g/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kitchen",
    image:
      "https://uc5c4ca5f18ef812f9816025d2c1.previews.dropboxusercontent.com/p/thumb/ABGzcKELdOK7aCiQGSPSLdbvv4DO0lxDGb-bkZ1n0FINQQYedRAB1D1T7_Lrqkz4_JGMAP112CRENd_HOGzY0ibNWQhdGNdW-5C2gRw8JDkuK7C1F5A9RWYE1_jWotGXPwAlh8LoPEZ6KRAQrNKmUPJMDW_M91dWSt6IfD5s3Iqi8ZLdRbhuUIYBdex8VwIl_GtBSxHoxNKlvdGEvNj2xGoVn7AxlL1o5uoppxuc-B8MiJ3EWL8BviChyOXqT03OmHIVGW0QJNSq2gORtQe3_I4ntIv8a_LSlR8Km_xu3hziMKHCVDb2zrOZXFYwWNt7apNxZDsvt0Nx5PFGTw-FrueO-HAma-4qcxGaFaVPfMMv5g/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image:
      "https://uc3e8dfe3df2a93421d464b36d3c.previews.dropboxusercontent.com/p/thumb/ABF4PCCLJnAIbcculwB7yPRgvF0lRyuNqWZbRB3mIR8jc5i-cbO_IUHSnFp0ZimuISh6EyGHe_xAcV-XfOFnVL_q58gskWEFWfd2iYOAumv8_iSrDUhnaEUGUmZ4QC3h3Kh8nAuLenZMxcidVFO0gteudmQJe6yfrL98v_HZCOoOGzcI8weE0no4ABUkevejzHlyAjtKBFUAJCja-yPYQm8lKj0IIEhO39nj2E5CLtwhV_Z_jueeGIVP8T__IOPbnON1ze-Y898ZRfmBaRknrAASTPsYFul24ZFWVtLdDJNxVqbnx76LgGfnR5aBa9O6WxtYeeiBhAJ2L03lQ6auI_awED32Kx2lkt6o9zhfg1uNTQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image:
      "https://ucd176697e90ef4b11dd79a9e464.previews.dropboxusercontent.com/p/thumb/ABFGv5xPoKMFyE8jt-Ppujlkvna4sqX7_K7lZ_3Lhav_BCvQv5aZ4BAS_zcOLoBd9Zo9g70H8CGSU-fspm8GfjEhlZA_mUN-vFTned656Q6Bm2gVFKjXo2N9Z6Mwn5ZBPVSC1v5uxklWZy3ynncjEeuvKlWAdkSuEtHZVDX8rzIKKj3ehbiTbgxPftXdoJ9T-Ou8oyV84CtRLgqb3eI0OBc0gsVjPYm4AfejYA_bmnC8jtwYQccmwq6cWTRq6YCwb0qDcoPG3YVvSAqwmBEuxwndfgzZoKx_vhGItdkHtL8pJbENQueCj5gwlmHMMJndX00Q3H5L91cz_BoCsCicMzFvzqtpmVaHV_m7yvVPJNolVA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image:
      "https://uc1dd5c356166a79d058bc9b93d9.previews.dropboxusercontent.com/p/thumb/ABFuBkgNXKqsvoRGwhN_ApdH2saAhfY0U6wjGmofi1dS5RsM-FFaNpTZ5v8bUvPHMW7EvZ4TbvktDlOsRvzYsBCK7KDQUfhagKeV1i21QtMqo3Tpn4HAdxxRaF0tQdIm4izLd8wM7U5D2hHP0XDZJU-tI2C6YTyporxaXX__gV2eiHjEOkH2WiPDG-P6SmKrstEhRLF5uQ25SMbcoQWWr59A3zSEE5Y6jJ4C4NxYmdtyIkZbtX1aZgwMaE9xL2AOdTlqvy2HCFoo8btVxiOWzNAO1Q4koCFISbxm4-j39WygZLXas93gJjLhG0R0dNF3iX1Zm8b6j0exLTB9zC9OWGUPlQ8z8TPlKlezvhk_wa2acw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Bathroom",
    image:
      "https://uc02982965c345a6a621f11306e0.previews.dropboxusercontent.com/p/thumb/ABFXGtxiY0caU8o0hUJkVUAmZ1_hgAxfiJbHXPnEwhsEPDY0eW_uUGWTlUOmqdeq7YMfQVZ3b5piEFJ7ib_OSZXR1yyr1HTxnhvQsl_mQv1Uqk9ymV0qprbMaHdV3WAIKnAR3O1fSHR6AtUZ5Xvxhu6B3cvDaCWruVnzunfkGdy784IK_l8YgGQ_awNT8Nc2U1Km_VYy7-NqZUgKTOFZzy-dMUKNEy36gzH6Vpr1todtOEwn8kD5XVZyWWhyT6x30NBeqJPqEeZym3cQoYqVhDTkdlC2OAwRPQAsfSqn_R4QK4giJvd_SgZ2gIB6syXf6rzB0OpM6IS_0DvEPnhPC1eMnC1WvdWR9nDkvY_QYcV4Rg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Kitchen",
    image:
      "https://uc8ec31e5f8664726a263e608b36.previews.dropboxusercontent.com/p/thumb/ABH6haX59mOGsqfRgGurHqqV1LWMFov-ZS33BV1See_A4cRGF9GQ7GUuZ8AY24rZ7psieWT2avx0lu9mtZpYMHTpdfrOFUiDppz_XTCuM2gBTOgLm-zDZy78y1ATvu0rcAH0pBBHGRzuTcllTa1uBxxKo3h-pieUEJ-rjutdVT8iEW_E2HScnOnObjB5j_eI9Se6xlOQHqcTgwEHvXz2DuCAc59oiKrrn8Vg36exLXqCZTf2o44FJko19oU5pwte2eCDEmmsTd8RnhOGFj_USIxdXfhF5X05kb8cR17SfLC-eJ_flGQOUJ-VdDyQ4AtwEscKyUTCn6mL3OdkNCTeLdWz_dorR_XxsjSFbuM5FgHbBw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Lobby",
    image:
      "https://ucfab2bbd5315a979035fcd07c9b.previews.dropboxusercontent.com/p/thumb/ABEHY4bGcnSvH07aD6DEuE3QE0XEXAOD58Jv5pI8Rr7OUi_PPiqPziISBxPSaTo5mShYf_ZvOKYtDTwuFBjPDyuaCqHmCS8Pn12J4lrX-03d_4LdZ7RwZ4CGN3-8LHYAskAzv_aUIrAZxqO8YJoUsex1LtD_dxXuLLO41PEhpNABRnbrfgeG02KWc5VIu1vHtyb6VbcM1cClk3nQKdzoHyGZo0cjBfOB7GMCvZ9MlLZsuhlXFkAtqUCxdIfcEmK1eN3jyPJ9nLkIjJMX79wfTnltt6U5CWaQ8O4A0Ir2dcib_f0uUiNMeT4bq1alsKiPQrqVCHa_2qv9X7-gaJvbqZ-vdoJvUa52plpsbsBTBtDd9A/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Bedroom",
    image:
      "https://uc2064a115c7a72858adef538aa6.previews.dropboxusercontent.com/p/thumb/ABG2k7UQOrqwwY1bubEHDsRdSN6TocUyH2vRO-iPG037rwDt_NYEuzcmcGK28cmdgBpzmCGmsJb6bpYOo-LV90ni_p-Ns0CcGY7HeIkp1123uUjBqGPmx3O_DyvZ9kJmERyEyAHhToSkK_frL_8fR-HaS7cN72Vc7nLWz1ptqOoXgVUZKbgHjkKkUMMr73-9Zzh-kaLTf9laqSdCKX1nEaDacF6JZhvKlccM9Ew-GDOIPNj2ql1zjuHNXXm56kNKBvEAGPvujl8wxJ5pybbJBdqho75sQQKD7QKuyfTSsRhKn80LiItjuQ2oQAlK2ja0Kq6xQRGXlAoHMbn7R8jq0x-klQfhMcmahRSn1pNt-D68qw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Bedroom",
    image:
      "https://uce18d9372a4b06b6eb38c33eb45.previews.dropboxusercontent.com/p/thumb/ABHyPu3_Cirp55FioUAx2_605xHYu5fZHD8_GKL0I476DmE20wkmyJEzpRzDPj23W48li-M571TwaDbFzr9tjEOi5Q7_j4DhS-c7aiyJnZOlNvh26d-j83zTWAMfUeMnDHDXZyhxjRAR5xdkUTbDzvlL9LHL70t_fQJCZH0t9lVf3ggPZc5nER39goXEYVQXW_YyAI2T-qLydd54O2xF53dA2fE4lp2bTDZB8jr7OKUlsDTcSjFCE4fiXAXMSfVco6pEtYVu60kgHKQFoeoeYGSXGASuk0u5RP0x1Alm8WdKyL1KCf216YBEFqt_WpdXoOu0YY1w5nXgrZwt0pyH229D-gf7-5mUBOC_uw9gOB8wRQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Detail",
    image:
      "https://uc96dc00306758ab3a1dfab3f8a4.previews.dropboxusercontent.com/p/thumb/ABGITbsBjHjj94umrsC8ZjgCg_cFNhJh2HqtOL2mq0DEuVQi3eGXn57It-G5xhxMKlI-Ts_N-iqzRmTyFgjDwcFkjMuOH12k64ss1PEf0-42r1x10kvQk9DUi0Vvf4-OB-Qz-bx-MCKxNT1QHu90fCsM9amrVZ9nxMTRkMpsbTFPP273YhwRvvHRb5JKEDiq5lB7jtjrx5s1m85A-luR-EjWjia587f_dbr0pu_19YlYlQ25vVybUCpiwt2Qu3190KB0TkH1fxd47-lOx7jX37oSNLeeujIbzGjp1MLWe9EMek5zwWg2U4SA9bx2S2OZSfv8CMpoA8hfVt15hWlD11eHn4lXAIf0JlziAYunGVQERA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Detail",
    image:
      "https://uc1435453731be7df51352c926db.previews.dropboxusercontent.com/p/thumb/ABGKuDz0PtSFzKLloPgoG0ZxTW4xBT5JOmOkd5YlehHJtY1ZDD825oH_uaPm2uKpboqkQdLv57t7YOC_CRfJ2Qqa1JMJiuF4oABCqt4Q3pm7KcRIPGEUSkDfreIjPLy04osYikGDUy1gh7lI38jOCh0LrJogrNqRYu2sB5VaxyCXQgff2qYULhD2YtX895z21h0xMuuqVdJGBhdUhSKrXLSjyO73K7d9gas76IjdPTMUCJbpQxqJ8JquUa7e-cKiq8b01TsNwohRrMCbzB3IUBy9Xjo1vOjt58Df8jU1zEv6FWAXGDAbgSWku-Iix6MiWI9m6ajHnSp3anB-h6zixCk0RQ5dhZGXGvxYe6Ndrdegpg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Complex Facade",
    image:
      "https://uc982cfbe374f2f2f067de4c3d02.previews.dropboxusercontent.com/p/thumb/ABGaZxPEiEzmWX64KTgD3MepvCDK_Ww3rFLJNoQe2nd5kEzZZN458XX8-1RalaZi60vEXzrkjaCpylaS_vjkbpegqHXweAZbiaFFt1YjVUTf7iPEo8aDyHWQMGqY4Arih_hiFNPLN2GWKLzdC6XzWSj9JbLMOIwJs8I4HdrMxdYVBfFJ-1G2XigaLtYYcHC4uSJMGDygLMXvBjf546I1tYyJImODm6jVFmKh_QNDe7xJunbHANoteyx6VKkPl4XYptiVvwiHMns4klZ3kOOGZsbJmXJTo7XvQudlX_seFSdUx4lmopgaZelheVK7KwH7zwa408DE1CRovfKNS6NGheZkwCFDsy-aNZUabm4NJDGBBA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Waterfront Cafe",
    image:
      "https://uc982cfbe374f2f2f067de4c3d02.previews.dropboxusercontent.com/p/thumb/ABGaZxPEiEzmWX64KTgD3MepvCDK_Ww3rFLJNoQe2nd5kEzZZN458XX8-1RalaZi60vEXzrkjaCpylaS_vjkbpegqHXweAZbiaFFt1YjVUTf7iPEo8aDyHWQMGqY4Arih_hiFNPLN2GWKLzdC6XzWSj9JbLMOIwJs8I4HdrMxdYVBfFJ-1G2XigaLtYYcHC4uSJMGDygLMXvBjf546I1tYyJImODm6jVFmKh_QNDe7xJunbHANoteyx6VKkPl4XYptiVvwiHMns4klZ3kOOGZsbJmXJTo7XvQudlX_seFSdUx4lmopgaZelheVK7KwH7zwa408DE1CRovfKNS6NGheZkwCFDsy-aNZUabm4NJDGBBA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Bedroom",
    image:
      "https://ucd5af9e6ac4fa95cd9325feed27.previews.dropboxusercontent.com/p/thumb/ABGI5TFRHf4sYTqQJcwrtTwTT_fvsETDQyjnTBs5aRtpELbMYLkNxSwMrU7pRRKY2uSbIijMNORdnl7eof5p0gTgDtdqyfXZ1Gqgi5O-rgnN7_V6XQ4nYez4YelWGZyp-37RJy3Clb8uxP23R-bDj51teqhng3lfDuXVjh3itLb3TIIgMJu4EG_d0SFXlntdvfm5mQVe_HlJEO4IyMIwvUQhT7vina-GazgIIJXplx15kyjEWosUtmpeYvaEWtHzRXGL8L-nKIHxGGsYBTdmS3tvxqA9whVmexVTpWBqwc45mysqabnIsx0132BKRx4-ZZQDUpLBUkVWWKy6La41HhBxwKxmiN-1SPRv8S_Umjj97w/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kithcen Into Bedroom",
    image:
      "https://ucbcae5344de191acb212a471ac6.previews.dropboxusercontent.com/p/thumb/ABFSZEFFSnU7HGA8lEeWW6xDDx5631K6D1Jz1n9CeDLZCgR6vWiAfLnuLFrmVNMlsiODbHjXqD5kgNyG2J6nUDOJkPoACH0XG6gArn26H8mzvxaGFCf-odnpzpJc68QQB64GIocv91A-NElL1HPUo1d-g3eU2uUC437eiEHRmIfhumIdNKsIKt_jPQ4rR2JoWWFd3Xjpr7XRYYAC_rh_yZIBZUjyqEDskjOab0koY_Ez5QZRhxSkXTqXfv_7DbuqGfT2qZEnWx7UsvwXkrAjdD2-e9YecDA_pM4KkbPtDibMm9sFfk2mWffHs3E7sKZqkfiIhL50OugsyAEPEHmIKnGH909ywxjmqSvE67UOYwiNXg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room",
    image:
      "https://uc33e84c9a344142b950aa037364.previews.dropboxusercontent.com/p/thumb/ABFmGaGcs6z_t03qnNLtsWoUHbHcsrK5Xj7v6imqY4fvTLU2P-im_yrNnszaH1rsWPryiddbP3BxrDiBOZFP8cPqgjwgCRuAdUJHPD-iEpsgPq7bl_kulREpEb6iuL45F4Evdb1q2Y5uL7_1YOvltzFMP18lakadomNZMxxYMqvG4P4Y_dj_7Dkrm9vZAbHanPKtbv4dIQGq0DqKncnnQTCK8XeMY1pgYXai9imy3D7ljjh09TLOrekG9l4CpSDCss1WDIbQsXyYaL1CmorMjwo-RfD3AYXUd9ItDtnTtau6zUAiE7dwry8-xaNtLAlpYktX3kjO6aKgRRVGqC8y7azZ5EkNZHzyo-dGSq_RCXo2BQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Variety Building From Above",
    image:
      "https://uce015b8c43d19c39246cdbf8eed.previews.dropboxusercontent.com/p/thumb/ABEC8cbuYLzUbsEDsOVm4AFXYLEIg1BO66l64RGuq3CuiWQrRMH4UtF_UTKFh93Hsp71VqOjPKaJ-dRbeGoycwfxeMr1DOe3N-soEGpsriiiK0xCrqIHFIR1BTDlKOmfXyban3L9cNC759GZ--h2JzbrNxaSM43ai_DG7_D4COg-wTr9WheGIIOLMVytCGnQ1U3AoZvk18KcfCyB-6FXlxQp-TML6SeARvE8U7biB_cCQ3xfKQmaiOfWSHbVhLZ-a_ib27L-uAgzNr3NJ8SwlmAljG9xdSmEMn69_9wd5dXeqJsEkL3fuuDUxHeGiyXnwHAVH8mI9AAg8b0SqYA6R-_ioYno716VvWjXOGnUW7Uk2Rv1h8l9Ljkx5EIOVZTNDuyd3UpR6OfyURoVdqEYidyh28aN65vLhUTTi-R0jJgY3A/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building Facade From Below",
    image:
      "https://uc4b2f2edd740129fded804040eb.previews.dropboxusercontent.com/p/thumb/ABGkTnbn98ZQruvJgKPXuh3J0sjiJU9Bgpj0QhxfFkB3jgXsJHyvDmr_Gn8Y5v_1gbhwm5eLOySVGM7ufae_0gtM0GPMlP6MiVQPZXqFo1FxB3naqFWZaWsH_Z0lMnTrYkuz1LOCxQ4_oUqkmW8eigR-U2cAu77Z8qGWmxnfDDGNMizsC21vDKUqEHDUOTCD1ntaqGV4mcj7dQvSCv1g6-9BxjrMneXLIvuv48KTF82mFlg2xfLz2zzXvj7z6kQ9sgTVd0tMQuFFQzpGOBLaPVeSYZfUdT_AXG9dqt12C5WI5dSR3NefGa6_jzr7UpR_EFRr2u7W_YdIaRkyPDc9bRMIyO-Hkci30rNcvJZ6AEFNBw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image:
      "https://uc5e1f9f696ff6a643d30c6f90c8.previews.dropboxusercontent.com/p/thumb/ABFXmVLu5_7jpWrt9yyc0SdT4CytM2C2XgYI3gzvTTS0G7LnSMoEyGbjbq-yM9dzLqDDLfBEUP1yo-Mf8NCDZDkHOfrAx2Kf3UZLpaVMmQmKh-XDvCxDOsj9t6GLCrc10r2zX6ZSoP5BsAjEHnv7ukh0JnVAtRagGABc0xPXxKcwJB_aueFWIocCDOCyNo2WqyG3WjrayCLhyJrgFHjlNODhB4Bg_qP2tccvtyHc1brkmUq4ZaRzHPgDQu2kyhs9K2js7to874ydODJGtHb5tnnHswL6jk--beXgLCREXPn-jU17SAUHgWgfNp8o7A_8bZ1UPcAec3O5BAYFK7HdhwD-UcpZ5g-JMMGBNTo1kPB5RwFBpZdsTr2cTYELJGYZ-23fAQFLkykZNGribIYzV8cViEqjeZk7rQm9M4hadx7VmQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image:
      "https://uc3dfd0c877065342d33644acaa7.previews.dropboxusercontent.com/p/thumb/ABF534QaqnmuUPBjxTZdcv8dOrUeoMcJTiByL_Y1xTU_9p2UtcTwF9i3miBV9JeKSrn1EEmvzP1RH5I3kcqCz9vXrrlwy_tFZ7Tiiqdgt8AwWgUFNJuomH-bcS9pEFZRWRAnxP66ZyKS2CEqZEpfyzMVGIMgeFAvjtSRDBGKKGgAlTQtKOpAA7VDldItR8_Ofdh5om9jaLcXex-XdxBBABQuYtghA7PvJJmljwXGKNlFwIGGylsTRLaZMTParV22uQ2PJrXXZPDmgayOq5-n5wKB7xL6sJW-dBhMLiAQCgvO5hVir9XWsAtbm57j1-AsYGHSmcD2Y6rp1KncQNIYIx3cSn29sxCW_vhEJxmHHSK3rhn-KjrgjTmnLE8T1eyivq9S6iW6OF-yOdptcHHebnB9qV9Y6_7yCG2asuGxga6szg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image:
      "https://ucadc4f7460749dde052f8787d58.previews.dropboxusercontent.com/p/thumb/ABEgeFh_OFX-Xf-HT4B6mc1ZvcRG8huYsKQkwpXwJgu3fcvmh0pzcYNkpRVEh42Hi8sd23Zp-kDgE4X9lbbK7VwVJaJARIx5z4BT4UAcnAm-j1WDInwnE-n0euZyK3G3e_UvudZtiLZg43RDfvuswBVON4oj_aeChCgm7tTrZ6xHp-HyQcMPY2drC9Q3cVn5uGEltwxQV5MH7wEHx02rdJo8rxAXLAaRxjN0ziIjlTGBZTZu3bn26IQydXQfF1WnoyK0joqervUPQNH3srq1MUhjdhz5c_WlqTjxVFG_o_nmY2aw-ckC-PFtpa3DenL56o6cq6Bw9uLIR3gVqNY0JIzQqkCyQSkXAsrTyztmiDzGae5vx-GOmbXfsbIMFxn0w-h3rJJy4T5xspD6aiGNfGL6P_cWVGABH1RCdiy0VS_Vaw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image:
      "https://uc54dcd02096709d3e56d54b2ec3.previews.dropboxusercontent.com/p/thumb/ABHDLy786phXDdOslG6cwQ97cnb2qEes9DkvjQMFgx9Kc6BPyGobQFout_Fo5Wr5jYLtIAF9RhtgHAd9DR2XVTdTQqpeQqHgi5Vtrx_tD4m-_KNDOzsmRJVZ0hR9UviSR3_isnhRWptU8kZoGB1kFD78axgY4uMjhbvokmBrT-1iHk_NydQlxWrGpoNSOChNuh6TrXxfPf_BG-ggSVq0Ecx7w7PvUTgnhV7SL97596yXARrq3nWDl6K8kkDUOFzt9fMy9u2lH0kE2gytsJR0kWq6mVEoABmuva8FXqnZmPLDv2KcbyeJU0GIy6UyXpWO2w4pJqQryJMoRPJF5cr7u5Hf9Hg1DaiIz4bx91W8Y7PNCA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building and Parking Lot",
    image:
      "https://uc3ac2fde9035338bdb5a45ad319.previews.dropboxusercontent.com/p/thumb/ABE36BPBqPc_yp4TvFLMHn9eNXI3xMy-Vv6vdk8TqSxTLDTo3VJAXeILfQ7I93wchdWu_GS6_dZTgu414yeRZZTg8_6ft7rHZ51k-eegahxT4s4kTzYriG6swgKYeTlHy5UsM-OM4kMZpZ-FRXREhZfHFukCW6sBzt7jnR40Qh9yJFYg2Efs1XOROT-wSeCXCx0aHOKdwn19RKV6eqLSr-pbjpYCl7DQyJAVBfrnxvWiLPTTca5rKW5c0BIPh2EE6QvFy5xFiqM0O8Z4Uhk4SnTpB6gin-ABmeyUtxEMpK7WOdLW5b5pOu-uxohcN6wJJUijbDItr61k_S6qTCsCOukaK2ban7YnLI9oWw24KkVABQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building For Sale",
    image:
      "https://uc81fcc324522f30703b5286fc38.previews.dropboxusercontent.com/p/thumb/ABFjctfO0WKjjztwcTy1GMhjDfju5Dr79srrBzVnuE90oER0rUDqekiKUNCv7CtnoLuBKOoStsO6vPfax92ZxYW-X2QGlKJ3z2XYiUJqb_JA1I4sCrpqSjHq2JLjPR3Mf27HA3At4gpNHlAxbBpiSq9Q2NlJYwsBTWi2iZyZdWcxfOq3i0zFHomMlUobmk3tRFBCYFZxBcFWBlnehpHqoxk2IuZ16uX-8h0rhWIDNUjpJmLo9BAq9vh9w5sbCFsQibZwhmV88kqRQjfduQuCLzSyf840H74DJGKoR2sQT9LlaFkCEUyMS26d2k8Ek3Qg-mu9zY_RmXztEM5v0RdJbcLW4uPD4yxkewFLAJLXpZR_fm7_nnz4il4OCoqGGeSUT5Ht_WEdFuRhN_n1TQfpK5dACueoyPavzjF-Yq1FsjQjew/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Workspace Available",
    image:
      "https://ucc873d806614cbfe6644b6401f9.previews.dropboxusercontent.com/p/thumb/ABE0kMrsQ-c7u2FxTDOdvIB4j9f-OronDr_OEk3xWHRfyGG-ZVu0n24rt8CpHxc-PhorcM46NHX3PM1TYM-prTC3lShQW2YkTddRnBoWTmUOBt6SlEpiGyCQTO-skqdarGrTPGoihNa5rHPdFh_6teEOiRmTj4PR0dTXNiFTbLz4rDZ_fLhJzXgyzKXRQxIBNNQnIRq3UC4QiNtmuiuEx4ypxQEzl-XcqBY2KzYgpS9TDO6FmVPmUOp4xVhA4U2fJL1Xki4DqD12bNPEgOhBefH6wgzDUbVBj9S4potwX3ufP-OMQCBd8m_M8G6djmLZwWZO8T_dENKPzz-yzdKlT_uvOBcJKzBLOnYkW-0b9O1wgfDYx3I3KdDCJuVfDoH2QYe1oXlIzpHbe-aio5VnI2yo5i-4BBLPRt5RD3h3GJud0w/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Facade",
    image:
      "https://ucb246f0351c2cc0657bc4542495.previews.dropboxusercontent.com/p/thumb/ABEZnqyltrS3h7Dz0-tmxwmkgBfIWYNBZb0ugTD0sKsjI4y8fM-3l6plVJb7TKrs6zJYPxipp4Zzk6RkEjNzotiwiLqXEISdDWT2ARcKQlxmTVov01MNI2FK1j4Tj5su3USG7CYi3bwMdKtqQWsyV7r8d8EFKp_EX_CMysKwa11RDNzT8Y-dZ5MqU--ZfqwDzRxPNEKYFbT2iWU-gSHLoprtaJK0NiWPPpDj4h57y37Znk9z2a9aaW2zacJ51U5YyorG_iofWOsGsKOfRjx6r7FNdjnU3HOmLsj9QTDOi9PoZWF9zpKuPJNZyhh5AvFEdzRCGT0REK9tAyc4O1GF3cltztTzJFtyz32bSYhkE-lBWlB38cpwU21J2S8bUolG1HrEOV_mDZmbUld8UfSNQwtsQ7ETORhmz8LqlaB3aQmCEg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building From Above",
    image:
      "https://uc33781e11cb45036454eb7b0b4c.previews.dropboxusercontent.com/p/thumb/ABGrTVTLk9mVhjBxN10uCIRTVebg9xF5SNF8ClDQErHtnsZdX3zWbwdXPOxdWqpOJEps6YmtdduqN79HM1UqrW9vjrt_Za4L1SUlPEpXFi3hUrnj324WQmBhWWfINwjmpQoUkH2HAH6ekwGvVuL0OG2n84f1wokLJMmjlLLpHVaC2rkXBweRd6cr9CvjIhC6UWtutX68ABUkeAnvN_Ru2Hd3hXXO3eXxWakILt4ZNUj7l2KFJ2C8T5K8vsZJZqhSfBTF7uaiz99A6-fDGoKBpr6F1OF_lqHVAAy5bg9lUCdbzzhuLypRPlVf65ss78wwZh83lX9Wgvc4bti5oHTj-yuzFfX3liC2duTVQgbS1FhRG0Ii0-bgcHq3STPmwucg7q59s2QVrivWBStu9CWQ3quUu_C8jv0pAuMAjx-itEIuZw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Birds",
    image:
      "https://uc6c7186310964e7f0a90e3620e0.previews.dropboxusercontent.com/p/thumb/ABG4gEZY6eZUPG8hiIId81E7lEYRT1hsOQSbokyt3LfzLn9L7nIge60AzSClBY7O4nPA_DwM2hmqsOasRNO9_2-HlV4rSD2RtGG8TWOAIRi6G-sffletgP_3zHEnOsNPYdijLI2-R2kM8s8MXFHOhIUKPY-f2bkxQde1J0HlHK2OgFNP-qMAJSILkJr1LV_8x-NnmcCKcH3arWlx8k3LzAVwYGuMoU2TGBN5RFk7O60hIpctVUc8MNV21xe6uemVpTzQ_zFeLvFoVcx4LPcjBq5D_5AithWYjE9aLOf1jxdTbcUyZBhJERu_UV6eZt1_zaao_-NDty2Jcu5-m_VBIgiUvtS4XahXz85YBpDRhYIO0ObSpwffQ1S-kZvzDRoKWB2Wvmnz5IT2PrgC4xLCk-UoaEvGl1UgK2NlGGnk0xrqMw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Landscape",
    image:
      "https://uc6f87c10d8b8cf59c5663364bee.previews.dropboxusercontent.com/p/thumb/ABErI7KLQ_MYwfKBvE8YHtMzMasxMZp6hsDgYbQusC1BRIfzraikeh_ePd09F94vT7XgmbA6CF4rpjCKncqX5OkDFy-e4T9xyirpevh1H0lELMTIJ3QYL8FnsGkpoJJk50WbGIX0ims3gPIvoPXaHC8UWr0R_y3iIspI-EX55Sn590d-fCiLiO7-uPsMW2FVHzH-x3l2zH5piXXr6tCvAdNPfjlO9HzBo5EogPpwqPxeAE2H_-nuCSAoiBUQkhH5I8Ml8BCbMbPcwuB2DVPdh-4f5ozroNsHCxZd01kIsPKotXI2zXHKGgpbZOAtSQL9hPs3RIS0uPSFF8ly6I0Y_5_PVoQGfvtQoCnQlYQyE4F2DhuGGOLJ5T7n56H7AdzcNynskazIZgSlzLjjC2AYKPFRVTYHGEh1DyCAwPajM2QrCA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building",
    image:
      "https://ucac9d906208832fb2051aaa741d.previews.dropboxusercontent.com/p/thumb/ABGMYeejzmx5ntJB1r7JTEbHuZmayyYDjfJIQd7AB1CQ_0a4OWk17CyNLTdmHXuDPqMrY0476MMF2cJUOztY3y-6ROpxzRqsxry1a6tz6i3DrYONGgOL9LzmAywNFKs30firMX6JCwHfAXIRR2izXkMH7rvOTFraRg4sBjB362FIlb5TPTcy6gsN0Ey5bkYJoC5Gd4QIDc1BhODQKbxhZn2iVaaKDFS745TLqr03DLdDDO1T9XiKp5ZsX73fbUHU8TD8lqcvSgFzIZxQwKPmlwe_l0UitpTnq3fidejVUpbqf1yk4Mr_nveVFS3oQtvYuM994rH9bsEIdyiQ3BocjFgogUoySqctf9ppWelJrvKkRw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building From Above",
    image:
      "https://uc4e8a8820c6ce42404732ba112a.previews.dropboxusercontent.com/p/thumb/ABF6Pjpsvt54N32iY4Gfjffz1SQmKEwBaYJYfQskOV5lfd4besFft7Ho4NWtgq7f1JDHEgioiVgY4wrgEg0F1mEJBRXj0P6avMTWpa8O768a7IkTh-E6zfqmJH6CajHrtVlahtopYbgecsyfhGftzQH15W4u43CUEsVky00eYR1LYLdV1Zku8eDo2jtE03_t0Pxjby8h3ujTTYQrGJ3BWLdGZlim5QK2GZrn1IrfowlSabvk2RMXQTdl8OGiZF8wdUQ3UOlEtL2YErSDYz_Mv66uaj_EaujJ6qDSoHpJgcS5XHf_MY_-EFdvzjBmAoGcm5BJLxb4bmT3INyVmPSumosACAoOjd93tM4xSrTIr9ashGNiX6AnFPH-Uzis3iiz_W0RuIvTwRQ2xFiCfGSF7r8b6wpiAAWXP7DdIhvnt5CdWg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building Backside",
    image:
      "https://uc9b98ebeff86111e755ab116153.previews.dropboxusercontent.com/p/thumb/ABHBlStAFIhbmXtt2Ad0X1QsO91BBoAkINpmXnHPFiKdMMSfSb_ns7_eBgLL5iKeGg8Jk6taSZ0CN0ZRpRnj-ln7M49Ya7RGoHAGTcKSg_jcwMfS1xQlPVYVuoeBBbHGo1ZavHm2ziAaZFu1NW5Q9Jc4_RJ19c1cO0-SGhvIr6oor65DqSwyBAWxDpHeUn9nUUG6wfF6MvNnq0TYMGkavuR9KsBTPjBqriqiXQCdN6sEw3P8Ld2M71GRFEDcQ-f971h3Rpsb0M37wA9K0Qrh82B5w8LFIYcvUXaUD69bl4gIb2Xcv0TSLnat8OqnXhWKXJ0pfDrTpsQjsVyUcV3KO_gwEc3N3GVs3Xqan9AO71-Lqw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall From Above",
    image:
      "https://uc24d18bfb477d7fa72d629a6d9c.previews.dropboxusercontent.com/p/thumb/ABE355MBux_73CJau8EW4AwTEjXui7mMsbSQ6jA6c4fH4gmDMqdMKg2COGyC-J01PydsQxK1UgbnEp3AsflFQovCkjqxhWnXQz365Lu37G87ohhK8WBVlvQ3kU40NMqXwZb4sIRfYgD9VaaEdyejcWR2DNUkb4zmggDa8gIN5ePDFgRBRxxvLz_L1hv-XimorD5926H9c2BVxmj2C8_J5D9n0pmIYsxD87gLIxwAjwLM_lZBXNRJBpS7Tqe-lmZciKpegHnNEJPVpCTJZrM0D2defbWax2VPrF0ybbDLnMWZkizgKEdUaIbAdK8HtLywjuT811ClReflyvat5SAqcCAH_FZ_lHtFgml3L-cb6-b6L4E-KLHOFRIbUwXdGmufDYTp2IapXqxzCgB1motJxo8MH7hOXd--uj56ZT254rlRMg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall Rooftop",
    image:
      "https://ucfe4107b7191c20189cab855de3.previews.dropboxusercontent.com/p/thumb/ABF5LunFYVvLBXcU4iV2ZAmS9WkxvFHlSGsv1C4YAcjYsZC0hzSh-feSl1rgv_pjKBpkeZoPDLcj-NMnTSxmdhxCvaoic0q4qd1y2nyjhDohDijKCRIyiDxaoUT0AOwgf4F5wYeLr6bc-dh9vpnrpOimjtuvs7iD8zATU2Gupnx2X10OA3RmUE39HhXaFKpXULRYporjW6ZBKGG6ZeTuvf2DL8ZeHAUEZigZZ9aLAmXejnzyebm72TPDcLjmthhO3N3_hMLVW9szMIdn7WSQapnrlCFvPgNwgOoPfV8blBkuPvKEqq9F3M8yVVnlyGmvbtJEL9miTvMj1wF1JZ4ymU_LIw6mitEgwy0ufKdQWRgjpLrz3UhZxF_zcD8qBUkPtI623_AfMPMCjiEg39aKhE70lVaDvBCJ-P8DP0eQTM7iUA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building",
    image:
      "https://uc6b7d8ae04e04f668d706991505.previews.dropboxusercontent.com/p/thumb/ABF3wEIE36rYFrCdOQ7Fwq16RnaXB8_0t0em_USqijNSVLac0SalY_YoQnmsjeWGxzeXhmNnkj0LBncUfnLV2SjfSBHY9YOzhhpBKDxlrKv3HTOGLQh9xLp2oUg11Iz4Yq_tLAghR8u67KcZbV7vcACcI5NBh0lygp81HtH4okdUdyakTGJ9hhRrtZPqnVzHZYGQXG8de_SHzn7N8KLW2cPfHETOtXnUhB43-0Ed_-KfZ56wkfE2R5lJa2qMp51ba8NRh6ltXt_7QvDj_dy3w38m4P1zbl_V6jmsmX0yGbBirReFWvLsjotMB6oiCXl9bBpxB5mn4smqjuMbFnjFOWXtrB7guPpK_o1sISmaGKhOSt_foURUqStiZ3pEJyJrat-8vgVmwBGCVjWQruCwTKRE6PJ_3DzKYZQGCQiHjlmKGg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Above Profile",
    image:
      "https://uc082962616600a3e04f45efbd78.previews.dropboxusercontent.com/p/thumb/ABEX6IOYnyn8RcvzC9PB1w9moukjYNNZhalABXHVyiDZZ0_YwQGXHA9HuCHkYjr_riUkUyrTKNgZdbrVSaccUZo8-P2l9HrkPv8XTA1ldQpyxa20-KE9SPivk8spgDJv8hfI63IPTRrN_EH1apQoBTZl0T6GvKDF-anyoAq2mrMI7bTtrS78qjlCA1evbSYQbGaTny9h_9yBqEph0SGNBzKYVy-vIE7pXkhHPWKyTnJV0NztYgShDJNjaSGhyP9Cnp3H7xy7PIpqsvOYxQEgBl2M3rZ2HDLk99romPfKr3RXhyKhEjVpfa_K2EaVYMp_6LfvcoSCLPmb1ZbDVrH-WiLXKP6lO-EthRT1Ai2bVwWTKnhPUU0fbRNEpJazOlYGmmzMSxTTCY3p5kWmSYPq7DF-5DE1vGdL97NOAkpzeyIn5A/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Birds Eye",
    image:
      "https://uccf00d159b6c6fbdd863acae0d4.previews.dropboxusercontent.com/p/thumb/ABHn3cxCXP_c4qmjyT-J5SvjnDT7XyffES-eDy0g591fJMAMDCfnmAqF4PUdaKguBJf3nmWP_IF-Jwsp7SMr6H4G08oNDKnfiCFHoConuQRl6EGxBmHhTWkwLJecD_jXKHyDUI7oUQsU33GHfvrLY9efdilyCNiK3SJzAORo33vCW_fMJPySAJQz6_Ob3uGizGmHTwqwWjemChfuErEKy5IgJwTRl_iC3J2NePD4DM9ppc4CfWsJpzikptxb19NCsNLvE2raqaMiGq5yDUzgebgcUcTj9_ZcbMUOhzf0YK-mBuzT_ZV-lZ_rw7LtSeHVBV8Te__RocB1CdvJuGkJH_68tLbbgigvbXKXktoaooY_M0mIuQPaXm_KvkzkPF2ru4gm7R68dpO1HjYX1xk3lNT380G2BbOTx3Us6pfe1S-tWQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kitchen",
    image:
      "https://ucece00edd49c9c262008570cfbc.previews.dropboxusercontent.com/p/thumb/ABH5pGurD_QpuB4PG7TVEr4grCr-AV8_83Ep7lHQOtZrjfAyrJM6bCDDLIN8foAZGPfh_80-k0UEU9zoDo69j3Zc3p1LdHpKgzdNMpl57P5ztiGbxdP1Sft442wcSnXpsqTKUxHApiQsYRPgDj9euMNf3X1olI4pav-Pua5d6J5ipBqFhcDHMeowP9YecLQp6yL_SCHpDDAWTe0DaFdS8xDwswECOeUprAKfoADeZ2ZVN4XZNxY4N0MBzJRmUN8_0MsPJTHbrPS-2XIvJHl-NMrhgoCm1LoYnCFpI5ItmZ4NVnNX1_9fUdpG6ALWXb5JUmXsOQPgmG7wWQGPzR6pz8DBrxj5lXY7Vguw_Y1tipOCIA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Bathroom",
    image:
      "https://uc3995f42b73fcd2814df2a4a90b.previews.dropboxusercontent.com/p/thumb/ABF9QFzSpi7_EGYGwyM3zua8qqJPFcTgzmrFTRGj_UTa3x-hiNF3vMoaqNZ2JK9R6KGjYYvGqf67l0F28-32upfw915602c66x54cKZ4eJeCBQBsCdnvqk5S1qW47l5V65J3g7xeNd0mw04J8Ow8qQDAziwHZyzVdaCZe45Jh5dY_y7DPYxCyDEKYlf2v-KhHHLAcGXrEesfb4siHbG3j9Go7PfMpDKpZdlgcpae_P-Jj3kTAStCPq_DDF6jUzmtPbB1Nh5aN4lGailjc5iofDLLjWj8YYyhtsMGms0MEQes0fNVwCjCTE-5iTLQkM0S9S0KDmjbsBxh9ehPjxxX7xbaPmjMQjxn-6VHQ5v2TasrFA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Apartment Complex Terrace View",
    image:
      "https://uc3995f42b73fcd2814df2a4a90b.previews.dropboxusercontent.com/p/thumb/ABF9QFzSpi7_EGYGwyM3zua8qqJPFcTgzmrFTRGj_UTa3x-hiNF3vMoaqNZ2JK9R6KGjYYvGqf67l0F28-32upfw915602c66x54cKZ4eJeCBQBsCdnvqk5S1qW47l5V65J3g7xeNd0mw04J8Ow8qQDAziwHZyzVdaCZe45Jh5dY_y7DPYxCyDEKYlf2v-KhHHLAcGXrEesfb4siHbG3j9Go7PfMpDKpZdlgcpae_P-Jj3kTAStCPq_DDF6jUzmtPbB1Nh5aN4lGailjc5iofDLLjWj8YYyhtsMGms0MEQes0fNVwCjCTE-5iTLQkM0S9S0KDmjbsBxh9ehPjxxX7xbaPmjMQjxn-6VHQ5v2TasrFA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Empty Apartment Room",
    image:
      "https://uc484bfe4bd773f1e8ca98c63279.previews.dropboxusercontent.com/p/thumb/ABEfFoWF6pPxaykpBpsVbFYR0jLdYPW9paOutIXbFHIChbQelz5vTfFyARCka0pqkKm4U_Ck_KaOrdgxzy773Gv1bpTewigsKZEPdAT3WzIOmhLlCbgess6nOhuIFvdJzHq1RbxENbVVCPNcr-rIGWwMC0-lvP4r3Z3CS3-niVh6Cie92YHeGVK7Ygxj3L6iJ61kC5Szuw-Uqu6i-hFkCzBSO0GM7VZwfFQE98WXarkqoc3I3SmerjA2znKbEioJTIlk_IpkApNSd-aaxmsvxPYcMFtg-AUkLGQjO9jGqxXML6OKVhRv3qDhEHI31nOXlMGrMXA6xPTYlYa255wpUMHmS9vDHO2yTLv1q_ChF_PDNw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Condo Swimming Pool",
    image:
      "https://uc5d5c9d015c24815f6bbaeb9ac4.previews.dropboxusercontent.com/p/thumb/ABEkWstK1i5J2zE3lyXvDIdwJasJ0LMeeeQu0igOuD5vbTH4kcZ9v2spHVDXLwEoW-XF0xOae4j67gQb0i_a2YbwaVyApcitgu4KxKLe-2-0VUlE8culQZqwllc1bir-dWrCAC_XLhXQY4HZQDxsTD6lSvAsaDF8V9PWtIDiN_nXyk9hqvnnD2n29FXfauRe4WN0UD2YzdaMt4MInVAi0XE03ZfMDUlCP9vKWwnUBGD9Y0IYNqX0ey6kGGSO-TayHsW2voKte_nUsK5bcaH2pMe7vpTZXzUVwx-7fXNIQBTWvQbjmPgHH4kvK-eTI7NPvsaAMG8KVUMmRojItYh45If1tDr6qSySa03J18a0r8mJkA/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Private Swimming Pool",
    image:
      "https://ucc2141677006124fa3fae9af5a0.previews.dropboxusercontent.com/p/thumb/ABGAbgo_Kol9gpyCACKanI_cUy5HLbSUrkeiAyuiTJ8mWzCUU2b3FwL4jQzmX_tJkh8nqIjLe52vFGoNUMhPXgd1yCWtfdld0srVCC3ItEvdzsCo6T9-LYp-EaNIpSMTJZ-KNKgBnSqo-zgbgnDKlnJHNjJ_SAmC9aYuuWIDWtan_wZV8Bs_t0SBiSbG5RNx2tjiwMTNbpj1fHDkveji8Cmw58etblp206EUoq3KrzSp5HeM06w6hks9Pb26gRH1ACkb3_qB6aRQqCU_u3brSA-7uOJuOJcxoRj-ep9F834UPziOpH_izh1_jjPtsxo8xaTOQbjfp4mfAznSjn4_nZo03konz2QWstyjBD4w-TxyCQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Sunny Kitchen",
    image:
      "https://uc57abbea507e1948e4c3ba0522a.previews.dropboxusercontent.com/p/thumb/ABFIeAR81ix9GBLaiqFHksJIpcW4k4CdM9m5a4RuZjAwHk5rMDwmYWXgnk3Ugy9WSgIrgmSsodXgxeHb2zW1gn020foCBK8hcdMianzyyayZVbaRoTIIcOC5yLwSSHJsANrrzaN3aHbUfwqirZ3O4a0fLq2O9CUuovFjN_E6LM0bnc1GGFGAs3qu2WCHQLmLW3NfrWJjtFRvo8BFiwWNWJW_-o7uPccK3I1aJVzZFVylH1YPiILaQfG20WC2t62ejsamdDvSo-AUt3kIKXrIylOD-Rz1ZlDg-Tbxshgbg7QiW0wGawb-x2JCk3Tb8yPlTQi6jcBzym9J-WSOPqihzqWxewb1echjIMrnFgIdFZ9Zww/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room into Kitchen",
    image:
      "https://uc319636f601264b594991426109.previews.dropboxusercontent.com/p/thumb/ABF6AxH2guSplsdcdS3Xcz5cLNsDfNXsKiBpMCX-vDzuU8lK6dolrLZSB65DSMqaPuDlqgNfMb3B2qWjY3ulrsQO43d331jECbr2twFxpjMkn25j1HBDMQon46u2kxSoq_92awjgtVlLywzr_Q-1IyEeOl9p43QRsh84qFdFrkhOa43G0llLP740XwEYYntAd04233s20w-8kyMl-cqFo6yRH3CKLHMOZoHFIb1OXMmDeQml2XKfzdjdSfwWodIcEj-x8nCpznuTKlbPcMb2GF7KpXBdGY0SIj4W4DAgLtNUXVrWRcC3BdBGIuRKq2cZNvEHTm-jpMbVn559sdEbO_gQ3K8nUGyb4W5DG2JzOKJmEQ/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Children's Bedroom",
    image:
      "https://uc15a58b019cabdecb6e33cacaee.previews.dropboxusercontent.com/p/thumb/ABF1y5Nq4Z80zr2I7xKpVJQHuh1wGBfAKTV-bKaJ9mM-Q88lRnNB951hWyp1B-Lrq9O4ZDMUiHIUFp0cPl92vI4D3XHPjWS_zfhRZa3hravVzcdepIYKPWh1plywYBuBeIYSpWfQh8_zNvndVSCakaOT5pz_M_Wknevk5MqTw6D-hmGlC08_wlcUmwhG76qN6FYgZaM0VMj4V7D3VDN9bR6oc-x853bSU42taZd094vLIgr8vghOKJuI_GlZW6egHH2EEM2r2wv23fiDSrTDA3nRCk2BU8U79bu8N6s4BndUNXPzEO6-B8ju-O08VyYPeKrDCvVizMEmMX-z1TTFLBkVCYKETOmLKw8QozHw43ZwWg/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bedroom",
    image:
      "https://uc3b296afec610805ee14e78392f.previews.dropboxusercontent.com/p/thumb/ABEJvge38dk-KuaaQRK96LeR-VrFqVxqmWrxYeQn42BmY0dCHmka2jeMJX2RbYciNzaESkhF-HaL_Y_8Wu3V44P9kVLMvWP50IrMq9K3IQJyCygdCL9PdGLoGr2jFEcJOjnytzYn9vlljlYs9LK4WOy01i1E-CMjOg3Wf52pQnj67SVlZ3DvQYabved5bLCCmNTgIX-7XNYwhwfwcPeGj8X6zj_fYrj6pLrg7men9nt3n99_9CKulOAaTPcHzpOdM8MIBjizuPPfChVOMQRrk66pGxjwpcZ4RT4D7VmjWkNBh9ipSmnVwXUSKU90R5OdH5EJhQHl75rgyPqmFzdN0GC18czbMHdDtUoQq_3iS_rdGw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bathroom",
    image:
      "https://uc5fca9e2cf50ac6de7b5381156a.previews.dropboxusercontent.com/p/thumb/ABH0abaxP4EGrFh9El5VgqsQNsQ70xhGF0GWdzTSOXlIRCatbvTlXOVUQw2QtOxBy2QarzLXxzqAvYlOj_dfRVeCui19WIejoQdAmRiEA0B-U9BFFfsA06dlKg2Vwt4B7YKHvp21VT_sORhQDf3bBDXuliu-6jMofntxTBz50wb3fmfo-bL_rbngjzTxaTmsOC1N6fUh4KbS3M6VuwhvyqZDqfCwynt6G2dxhf613Tb5B6a1OokicyZX9XM7IJX_0eLgB41g4lY8kTpfYVHmEz3eYKrZDEzz7oki5tzuD4BImQivPLe5Y6-Wan7eH6Fm0UI826doFnFM4gkGqAbU3tS9TIgyALF_XuSqjNe_LPvbcw/p.jpeg?fv_content=true&size_mode=5",

    date: new Date(Date.now()),
  },
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
