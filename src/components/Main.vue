<template>
    <div class="hero">
        <div class="container">
            <div class="main">
                <nav class="text-right changeLanguage">
                    <ul class="list-inline topLanguages">
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('en')">
                                <img src="@/assets/img/flag/us.png" style="height:30px">
                                <p>English</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('ja')">
                                <img src="@/assets/img/flag/jp.png" style="height:30px">
                                <p>日本語</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('cn')">
                                <img src="@/assets/img/flag/cn.png" style="height:30px">
                                <p>简体中文</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('tw')">
                                <img src="@/assets/img/flag/tw.png" style="height:30px">
                                <p>繁体中文</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('kr')">
                                <img src="@/assets/img/flag/kr.png" style="height:30px">
                                <p>한국어</p>
                            </a>
                        </li>
                    </ul>
                    <p class="my-3 topLanguages">※ {{ $t("NotTranslated") }}</p>
                </nav>
                <div id="home">
                <h5 class="title">{{ $t("hyunheeLee") }}</h5>
                <h3 class="mb-4">{{ $t("Software Developer") }}</h3>
                <img src="@/assets/img/MyPhoto.png">
                <ul class="links list-inline">
                    <li class="list-inline-item">
                        <a
                        class="btn"
                        href="mailto:jipai1121@gmail.com"
                        subject="subject text"
                        target="_blank"
                        title="Hyunhee Lee e-mail"
                        >Email Me</a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="btn"
                        href="https://github.com/jipai1121"
                        target="_blank"
                        title="Hyunhee Lee GitHub"
                      >Github</a>
                    </li>
                    <li class="list-inline-item">
                        <a
                        class="btn"
                        href="https://www.linkedin.com/in/hyunhee1121"
                        target="_blank"
                        title="Hyunhee Lee LinkedIn"
                        >LinkedIn</a>
                    </li>
                    <!-- TODO: calendlyが必要になったらコメントアウト
                    <li class="d-none list-inline-item">
                        <a
                        class="btn"
                        href="https://calendly.com/jipai1121"
                        target="_blank"
                        title="Hyunhee Lee Schedule a call"
                        >Schedule a call</a>
                    </li>
                     -->
                </ul>
                </div>
                <div id="content">
                    <h2 class="sub-title">About</h2>
                    <div style="white-space:pre-wrap; word-wrap:break-word;">
                        {{ $t("About") }}
                    </div>
                    <h2 class="sub-title">Career</h2>
                    <h3 class="mb-3">Japan</h3>
                    {{ $t("About_Japan") }}
                    <div id="japanCareer" class="flex flex-wrap flex-jc-center row">
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-primary">
                                    <div class="card-body">
                                        <i class="fa fa-arrow-circle-right fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("Smaregi Inc.") }}</h3>
                                        <h5 class="card-title">{{ $t("Jun. 2021 to Present") }}</h5>
                                        <p class="card-title">Osaka, JAPAN</p>
                                        <h5 class="card-text">{{ $t("Smaregi-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-white">
                                    <div class="card-body">
                                        <h4 class="card-text"><a href="https://smaregi.jp/">https://smaregi.jp/</a></h4>
                                        <p class="card-text mt-2">・{{ $t("Growth") }}</p>
                                        <p class="card-text">・{{ $t("Smaregi-2") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-dark">
                                    <div class="card-body">
                                        <i class="fa fa-search fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("AdInte Co. ltd.") }}</h3>
                                        <h5 class="card-title">{{ $t("Nov. 2020 to May 2021") }}</h5>
                                        <p class="card-title">Kyoto, JAPAN</p>
                                        <h5 class="card-text">{{ $t("AdInte-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-white">
                                    <div class="card-body">
                                        <h4 class="card-title"><a href="https://adinte.co.jp/">https://adinte.co.jp/</a></h4>
                                        <h5 class="card-text mt-2">{{ $t("AdInte-2") }}</h5>
                                        <p class="card-text">・{{ $t("AdInte-3") }}</p>
                                        <h5 class="card-text mt-2">{{ $t("AdInte-4") }}</h5>
                                        <p class="card-text">・{{ $t("AdInte-5") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-danger">
                                    <div class="card-body">
                                        <i class="fa fa-search fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("Cyber Port Inc.") }}</h3>
                                        <h5 class="card-title">{{ $t("Aug. 2019 to Oct. 2020") }}</h5>
                                        <p class="card-title">Osaka, JAPAN</p>
                                        <h5 class="card-text">{{ $t("CyberPort-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-white">
                                    <div class="card-body">
                                        <h4 class="card-text"><a href="https://cb-port.com/">https://cb-port.com/</a></h4>
                                        <p class="card-text mt-2">{{ $t("CyberPort-2") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-success">
                                    <div class="card-body">
                                        <i class="fa fa-search fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("Livelynx Inc.") }}</h3>
                                        <h5 class="card-title">{{ $t("Sep. 2017 to May 2019") }}</h5>
                                        <p class="card-title">Fukuoka, JAPAN</p>
                                        <h5 class="card-text">{{ $t("Livelynx-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-white">
                                    <div class="card-body">
                                        <h4 class="card-text"><a href="https://livelynx.co.jp/">https://livelynx.co.jp/</a></h4>
                                        <p class="card-text mt-2">{{ $t("Livelynx-2") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-secondary">
                                    <div class="card-body">
                                        <i class="fa fa-search fa-5x float-right"></i>
                                        <h4 class="card-title">{{ $t("Cross Games Inc.") }}</h4>
                                        <h5 class="card-text">{{ $t("CrossGames-1") }}</h5>
                                        <h5 class="card-text">{{ $t("CrossGames-2") }}</h5>
                                        <p class="card-title mt-2">Fukuoka, JAPAN</p>
                                        <h5 class="card-text">{{ $t("CrossGames-3") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-white">
                                    <div class="card-body">
                                        <h4 class="card-text"><a href="https://www.cross-games.jp/">https://www.cross-games.jp/</a></h4>
                                        <p class="card-text mt-2">{{ $t("CrossGames-4") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- #japanCareer -->
                    <h3 class="mb-3">South Korea</h3>
                    {{ $t("About_Korea") }}
                    <div id="koreaCareer" class="flex flex-wrap flex-jc-center row">
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-info">
                                    <div class="card-body">
                                        <i class="fa fa-search-plus fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("Powertronics Co.,Ltd.") }}</h3>
                                        <h5 class="card-title">{{ $t("Aug. 2011 to Jan. 2013") }}</h5>
                                        <p class="card-title">Seoul, SOUTH KOREA</p>
                                        <h5 class="card-text">{{ $t("Powertronics-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-dark text-white">
                                    <div class="card-body">
                                        <h4 class="card-title"><a href="http://www.powertro.com/">http://www.powertro.com/</a></h4>
                                        <p class="card-text mt-2">・{{ $t("Powertronics-2") }}</p>
                                        <p class="card-text">・{{ $t("Powertronics-3") }}</p>
                                        <p class="card-text">・{{ $t("Powertronics-4") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flipper col-sm-4 my-3">
                            <div class="card card-flip h-100">
                                <div class="card-front text-white bg-dark">
                                    <div class="card-body">
                                        <i class="fa fa-search fa-5x float-right"></i>
                                        <h3 class="card-title">{{ $t("HanShinKiJeon Co., Ltd.") }}</h3>
                                        <h5 class="card-title">{{ $t("Jan. 2010 to Aug. 2011") }}</h5>
                                        <p class="card-title">Seoul, SOUTH KOREA</p>
                                        <h5 class="card-text">{{ $t("HanShinKiJeon-1") }}</h5>
                                    </div>
                                </div>
                                <div class="card-back bg-dark text-white">
                                    <div class="card-body">
                                        <h4 class="card-title"><a href="http://www.hskj.co.kr/xe/">http://www.hskj.co.kr/xe/</a></h4>
                                        <p class="card-text mt-2">・{{ $t("HanShinKiJeon-2") }}</p>
                                        <p class="card-text">・{{ $t("HanShinKiJeon-3") }}</p>
                                        <p class="card-text">・{{ $t("HanShinKiJeon-4") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- #koreaCareer -->
                    <h2 class="sub-title">Education</h2>
                        <div id="education" class="flex flex-wrap flex-jc-center row">
                            <div class="flipper col-sm-4 my-3">
                                <div class="card card-flip h-100">
                                    <div class="card-front">
                                        <div class="card-body text-center">
                                            <img src="@/assets/img/KyushuUniversity.png" class="thumbnail h-50">
                                            <i class="fa fa-search fa-5x float-right"></i>
                                            <h5 class="card-title my-3">Apr. 2013 to Mar. 2017</h5>
                                            <p class="card-title">Fukuoka, JAPAN</p>
                                            <p class="card-text">{{ $t("QU1-2") }}</p>
                                        </div>
                                    </div>
                                    <div class="card-back bg-white">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $t("QU1-1") }}</h3>
                                            <p class="card-text">{{ $t("QU2-1") }}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flipper col-sm-4 my-3">
                                <div class="card card-flip h-100">
                                    <div class="card-front">
                                        <div class="card-body text-center">
                                            <img src="@/assets/img/CUHK.png" class="thumbnail h-50">
                                            <i class="fa fa-search fa-5x float-right"></i>
                                            <h5 class="card-title my-3">Aug. 2016</h5>
                                            <p class="card-title">HONG KONG</p>
                                            <p class="card-text">{{ $t("Education2-2") }}</p>
                                        </div>
                                    </div>
                                    <div class="card-back bg-white">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $t("CHUK1-1") }}</h3>
                                            <p class="card-text">{{ $t("Education2-3") }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- #education -->
                    <h2 class="sub-title">Personal Activities</h2>
                        <div id="personalActivities" class="flex flex-wrap flex-jc-center row">
                            <div class="flipper col-sm-4 my-3">
                                <div class="card card-flip h-100">
                                    <div class="card-front">
                                        <div class="card-body text-center">
                                            <img src="@/assets/img/geikoOke.png" class="thumbnail h-50">
                                            <i class="fa fa-search fa-5x float-right"></i>
                                            <h5 class="card-title my-3">{{ $t("GeikoOke") }}</h5>
                                            <h5 class="card-title my-3">{{ $t("GeikoOkePeriod") }}</h5>
                                            <p class="card-title">Fukuoka, JAPAN</p>
                                        </div>
                                    </div>
                                    <div class="card-back bg-white">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $t("GeikoOke") }}</h3>
                                            <p class="card-text">・{{ $t("GeikoOkeDescription-1") }}</p>
                                            <p class="card-text">・{{ $t("GeikoOkeDescription-2") }}</p>
                                            <p class="card-text">・{{ $t("GeikoOkeDescription-3") }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flipper col-sm-4 my-3">
                                <div class="card card-flip h-100">
                                    <div class="card-front">
                                        <div class="card-body text-center">
                                            <img src="@/assets/img/hongdeng.jpg" class="thumbnail h-50">
                                            <i class="fa fa-search fa-5x float-right"></i>
                                            <h5 class="card-title my-3">{{ $t("福岡中国語学友会") }}</h5>
                                            <h5 class="card-title my-3">{{ $t("2015 to 2019") }}</h5>
                                            <p class="card-title">Fukuoka, JAPAN</p>
                                        </div>
                                    </div>
                                    <div class="card-back bg-white">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $t("福岡中国語学友会") }}</h3>
                                            <p class="card-text">{{ $t("福岡中国語学友会-1") }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flipper col-sm-4 my-3">
                                <div class="card card-flip h-100">
                                    <div class="card-front">
                                        <div class="card-body text-center">
                                            <img src="@/assets/img/forestWitch.png" class="thumbnail">
                                            <i class="fa fa-search fa-5x float-right"></i>
                                        </div>
                                    </div>
                                    <div class="card-back bg-white">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $t("Forest Witch") }}</h3>
                                            <p class="card-text">{{ $t("Forest Witch Description-1") }}</p>
                                            <p class="card-text">{{ $t("Forest Witch Description-2") }}</p>
                                            <p class="card-text">{{ $t("Forest Witch Description-3") }}</p>
                                            <p class="card-text">{{ $t("Forest Witch Description-4") }}</p>
                                            <h3 class="card-title mt-2">{{ $t("Forest Witch Download") }}</h3>
                                            <p class="card-text"><a href="https://drive.google.com/file/d/18kXaHyKOn-Kr_TXmAltx72Xccr1h2YI5/view?usp=sharing">Google Drive</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- #personalActivities -->
                    <h2 class="sub-title">{{ $t("Certifications") }}</h2>
                    <p>・AWS Certified Cloud Practitioner Certification</p>
                    <h5 class="my-2">Japan</h5>
                    <p>・{{ $t("基本情報技術者") }}</p>
                    <p>・{{ $t("色彩検定 2級") }}</p>
                    <p>・{{ $t("ファイナンシャルプランナー 3級") }}</p>
                    <h5 class="my-2">South Korea</h5>
                    <p>・{{ $t("전자기기기능사") }}</p>
                    <h5 class="my-2">Languages</h5>
                    <p>・{{ $t("JLPT Level 1") }}</p>
                    <p>・{{ $t("HSK Level 6") }}</p>
                    <p>・TOEIC 825</p>
                    <p>・IELTS Academic Overall 6.5</p>
                </div><!-- #content -->
            </div><!-- .main -->
            <div class="footer">
                <nav class="text-center changeLanguage mt-5">
                    <ul class="list-inline">
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('en')">
                                <img src="@/assets/img/flag/us.png" style="height:30px">
                                <p>English</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('ja')">
                                <img src="@/assets/img/flag/jp.png" style="height:30px">
                                <p>日本語</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('cn')">
                                <img src="@/assets/img/flag/cn.png" style="height:30px">
                                <p>简体中文</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('tw')">
                                <img src="@/assets/img/flag/tw.png" style="height:30px">
                                <p>繁体中文</p>
                            </a>
                        </li>
                        <li class="list-inline-item text-center">
                            <a href="#" v-on:click.prevent="changeLanguage('kr')">
                                <img src="@/assets/img/flag/kr.png" style="height:30px">
                                <p>한국어</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="copyright mt-2 mb-5">© 2022 Hyunhee Lee made by <a
                    class="link"
                    href="https://vuejs.org/"
                    target="_blank"
                    title="Vue.js"
                    >Vue.js</a>
                </div>
            </div><!-- .footer -->
        </div>
    </div>
</template>

<script>

import "@/assets/styles/main.css";
export default {
  name: "Main",
  components: {},
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>