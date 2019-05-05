<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu
        :theme="theme"
        :menuData="menuData"
        :collapsed="false"
        :collapsible="false"
        @menuSelect="onMenuSelect"
      />
    </drawer>
    <sider-menu
      :theme="theme"
      v-else-if="layout === 'side'"
      :menuData="menuData"
      :collapsed="collapsed"
      :collapsible="true"
    />
    <drawer :open-drawer="showSetting" placement="right" @change="onSettingDrawerChange">
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'"/>
      </div>
      <setting/>
    </drawer>
    <a-layout>
      <global-header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse"/>
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer :link-list="linkList" :copyright="copyright"/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";
import Drawer from "../components/tool/Drawer";
import SiderMenu from "../components/menu/SiderMenu";
import Setting from "../components/setting/Setting";
import enquireScreen from "../utils/device";
const minHeight = window.innerHeight - 64 - 24 - 122;

let menuData = [];

export default {
  name: "GlobalLayout",
  components: { Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader },
  data() {
    return {
      minHeight: minHeight + "px",
      collapsed: false,
      menuData: menuData,
      showSetting: false
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.isMobile;
    },
    theme() {
      return this.$store.state.setting.theme;
    },
    layout() {
      return this.$store.state.setting.layout;
    },
    linkList() {
      return this.$store.state.setting.footerLinks;
    },
    copyright() {
      return this.$store.state.setting.copyright;
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    onDrawerChange(show) {
      this.collapsed = show;
    },
    onMenuSelect() {
      this.toggleCollapse();
    },
    onSettingDrawerChange(val) {
      this.showSetting = val;
    }
  },
  created() {
    let _this = this;
    enquireScreen(isMobile => {
      _this.$store.commit("setting/setDevice", isMobile);
    });
  },
  beforeCreate() {
    menuData = this.$router.options.routes.find(item => item.path === "/")
      .children;
  }
};
</script>

<style lang="less" scoped>
.setting {
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}
:global {
  //拖拽控件全局样式
  .dragable-ghost {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-chose {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  .dragable-drag {
    border: 1px dashed #aaaaaa;
    opacity: 0.65;
  }
  //页面切换动画
  .page-toggle-enter-active {
    transition: all 0.2s ease-in 0.25s;
  }
  .page-toggle-leave-active {
    transition: all 0.2s ease-out 0s;
  }
  .page-toggle-enter,
  .page-toggle-leave-to {
    opacity: 0;
    padding: 0px;
  }
}
</style>
