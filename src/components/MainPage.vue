<template>
  <div class="main_layout">
    <header class="header___Ke5jM">
      <div class="header_inner___aDpv3">
        <h1 class="logo___3XLu8">
          <a class="pc_logo___2KC8t" href="">
            <img
              width="123"
              height="34"
              src="https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg"
              alt="Papago Logo"
            />
          </a>
        </h1>
      </div>
    </header>
    <section class="container___3EGm5">
      <div class="content___jjEJ5 scroll">
        <div class="rwd_layout___2qH8c">
          <!-- 왼쪽 번역 div -->
          <div class="rwd_box___1ysJh">
            <div class="translate_area___3xdxa">
              <div class="lang_select___3h6b5">
                <div class="lang_select_inner_div">
                  <select
                    @change="saveDataSource"
                    v-model="data.source"
                    class="lang_select_inner_select"
                  >
                    <option value="ko">한국어</option>
                    <option value="ja">일본어</option>
                    <option value="zh-CN">중국어(간체)</option>
                    <option value="zh-TW">중국어(번체)</option>
                    <option value="hi">힌디어</option>
                    <option value="en">영어</option>
                    <option value="es">스페인어</option>
                    <option value="fr">프랑스어</option>
                    <option value="de">독일어</option>
                    <option value="pt">포르투갈어</option>
                    <option value="vi">베트남어</option>
                    <option value="id">인도네시아어</option>
                    <option value="fa">페르시아어</option>
                    <option value="ar">아랍어</option>
                    <option value="mm">미얀마어</option>
                    <option value="th">태국어</option>
                    <option value="ru">러시아어</option>
                    <option value="it">이탈리아어</option>
                  </select>
                  <button
                    @click="onChangeTranslate"
                    class="btn_switch___x4Tcl"
                    type="button"
                  ></button>
                </div>
              </div>
              <!-- textarea -->
              <div class="textarea_div">
                <textarea-autosize
                  @input="handleResizeHeight"
                  ref="textArea"
                  v-model="data.text"
                  class="textarea_inner"
                  placeholder="번역할 내용을 입력하세요."
                  rows="1"
                  maxlength="3000"
                ></textarea-autosize>
                <button type="button" @click="deleteText">
                  <img
                    v-if="showDeleteBtn"
                    class="btn_text_clse___1Bp8a active___3VPGL"
                    src="../assets/X.png"
                    alt="입력 텍스트 삭제"
                  />
                </button>
                <p class="text_count___AKP5b">
                  <span>{{ textCount }}</span
                  >&nbsp;/&nbsp;<span>3000</span>
                </p>
              </div>
              <!-- 왼쪽 번역 div 하단 -->
              <div class="btn_toolbar___20tub">
                <div class="btn_translation___b0nPG">
                  <button class="btn_text___3-laJ" @click="runPapago">
                    번역하기
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 오른쪽 번역 div -->
          <div class="rwd_box___1ysJh">
            <div class="translate_area___3xdxa">
              <div class="lang_select___3h6b5">
                <div class="lang_select_inner_div">
                  <select
                    @change="saveDataTarget"
                    v-model="data.target"
                    class="lang_select_inner_select"
                  >
                    <option value="ko">한국어</option>
                    <option value="ja">일본어</option>
                    <option value="zh-CN">중국어(간체)</option>
                    <option value="zh-TW">중국어(번체)</option>
                    <option value="hi">힌디어</option>
                    <option value="en">영어</option>
                    <option value="es">스페인어</option>
                    <option value="fr">프랑스어</option>
                    <option value="de">독일어</option>
                    <option value="pt">포르투갈어</option>
                    <option value="vi">베트남어</option>
                    <option value="id">인도네시아어</option>
                    <option value="fa">페르시아어</option>
                    <option value="ar">아랍어</option>
                    <option value="mm">미얀마어</option>
                    <option value="th">태국어</option>
                    <option value="ru">러시아어</option>
                    <option value="it">이탈리아어</option>
                  </select>
                  <!-- <button class="btn_switch___x4Tcl" type="button"></button> -->
                </div>
              </div>
              <!-- textarea -->
              <div class="textarea_div">
                <textarea-autosize
                  @input="handleInput"
                  ref="textArea"
                  v-model="translateData"
                  class="textarea_inner"
                  rows="0"
                  maxlength="0"
                  minlength="0"
                ></textarea-autosize>
                <!-- <button type="button" @click="deleteText">
                  <img
                    v-if="showDeleteBtn"
                    class="btn_text_clse___1Bp8a active___3VPGL"
                    src="../assets/X.png"
                    alt="입력 텍스트 삭제"
                  />
                </button> -->
                <!-- <p class="text_count___AKP5b">
                  <span>{{ textCount }}</span
                  >&nbsp;/&nbsp;<span>3000</span>
                </p> -->
              </div>
              <!-- 오른쪽 번역 div 하단 -->
              <div class="btn_toolbar___20tub">
                <div class="btn_translation___b0nPG">
                  <!-- <button class="btn_text___3-laJ" @click="runPapago">
                    번역하기
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
// const URL = `${PROXY}/v1/papago/n2mt`;

export default {
  name: 'MainPage',

  data() {
    return {
      data: {
        source: 'ko', //원본 언어(source language)의 언어 코드
        target: 'en', // 목적 언어(target language)의 언어 코드
        text: '', // 번역할 텍스트
      },

      saveData: {
        source: 'ko',
        target: 'en',
        text: '',
        translateData: '',
      },

      translateData: '', // 번역된 텍스트
      textCount: 0, // 텍스트 글자 수
    };
  },
  created() {},

  computed: {
    showDeleteBtn() {
      return this.data.text === '' || null ? false : true;
    },
  },

  methods: {
    runPapago() {
      axios({
        method: 'post',
        url: '/translator/getPapago',
        data: {
          source: this.data.source,
          target: this.data.target,
          text: this.data.text,
        },
        headers: {
          'content-Type': 'application/json',
          'X-Naver-Client-Id': process.env.VUE_APP_NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.VUE_APP_NAVER_CLIENT_SECRET,
        },
      })
        .then((response) => {
          this.translateData = response.data;
          this.saveData.text = this.data.text;
          this.saveData.translateData = this.translateData;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleResizeHeight() {
      this.textCount = this.data.text.length;
    },

    deleteText() {
      this.data.text = '';
      this.translateData = '';
      this.textCount = 0;
    },

    onChangeTranslate() {
      // source , target 스왑
      this.data.source = this.saveData.target;
      this.data.target = this.saveData.source;
      this.saveDataTarget();
      this.saveDataSource();

      // text , translateData 스왑
      this.data.text = this.saveData.translateData;
      this.translateData = this.saveData.text;
      this.saveData.text = this.data.text;
      this.saveData.translateData = this.translateData;
    },

    saveDataSource() {
      this.saveData.source = this.data.source;
    },

    saveDataTarget() {
      this.saveData.target = this.data.target;
    },
  },
};
</script>

<style lang="scss" scoped>
// textarea {
//   caret-color: transparent;
// }

button,
select,
a {
  cursor: pointer;
  outline: 0;
}

.main_layout {
  height: 100%;

  .header___Ke5jM {
    min-width: 320px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    position: relative;
  }

  .header_inner___aDpv3 {
    height: 74px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .logo___3XLu8 {
    float: left;
    min-width: 123px;
    padding: 20px 0 0;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
    text-decoration: none;
  }

  .container___3EGm5 {
    margin-top: -306px;
    min-height: 100%;
    width: 100%;

    .content___jjEJ5 {
      padding: 363px 32px 80px;
    }

    .rwd_layout___2qH8c {
      display: table;
      margin: 0 auto;
      max-width: 1293px;
      position: relative;
      table-layout: fixed;
      width: 100%;
    }

    .rwd_box___1ysJh {
      display: table-cell;
      position: relative;
      vertical-align: top;
      width: 50%;
    }

    .translate_area___3xdxa {
      -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      margin: 0 7px;
      min-height: 371px;
      padding-bottom: 72px;
      position: relative;
    }

    .lang_select___3h6b5 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      margin-left: 1px;
      position: relative;
      width: 99.9%;
    }

    .lang_select_inner_div {
      height: 52px;
    }

    .lang_select_inner_select {
      float: left;
      font-size: 2em;
      border: none;
      margin-top: 9px;
      margin-left: 15px;
    }

    .textarea_div {
      padding: 28px 20px 63px;
      position: relative;
      // height: 30vh;
    }

    .textarea_inner {
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0);
      backface-visibility: hidden;
      background-color: transparent;
      border: 0;
      line-height: 1.26em;
      min-height: 220px;
      overflow: hidden;
      resize: none;
      transform: translateZ(0);
      width: 95%;
      word-break: break-word;
      font-size: 30px;
    }

    .btn_toolbar___20tub {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      bottom: 0;
      font-size: 0;
      height: 72px;
      left: 0;
      line-height: 0;
      position: absolute;
      width: 100%;
    }

    .btn_translation___b0nPG {
      left: 320px;
      position: absolute;
      right: -1px;
      text-align: right;
      top: -1px;
    }

    .btn_text___3-laJ {
      background-color: #21dc6d;
      border: 1px px solid rgba(0, 0, 0, 0.1);
      font-size: 20px;
      font-weight: 700;
      height: 74px;
      text-shadow: 0 0 0 rgba(0, 0, 1, 0.15);
      width: 144px;
      color: white;
      border-bottom-right-radius: 12px;
    }

    .btn_switch___x4Tcl {
      background: url(https://papago.naver.com/3a3d38cf35ead812d0326007a76bf7ad.png)
        50% 50% no-repeat;
      background-color: transparent;
      background-size: 23px 20px;
      height: 60px;
      overflow: hidden;
      position: relative;
      width: 64px;
      float: right;
    }

    .btn_text_clse___1Bp8a {
      // background-image: url(https://papago.naver.com/bc7a00ca5cd4440758640c638a511d1d.png);
      // background-position: 6px -68px;
      // background-repeat: no-repeat;
      // background-size: 300px 450px;
      position: absolute;
      right: 15px;
      top: 44px;
    }

    .active___3VPGL {
      width: 17px;
      filter: opacity(0.3) drop-shadow(0 0 0 #a0a0a0);
      display: block;
    }

    .text_count___AKP5b {
      position: absolute;
      right: 23px;
      color: #a0a0a0;
      font-size: 18px;
      // line-height: 483px;
    }
  }
}
</style>
