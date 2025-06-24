import { LayoutModeEnum } from "@@/constants/app-key"
import { getLayoutsConfig } from "@@/utils/cache/local-storage"

/** 项目配置类型 */
export interface LayoutsConfig {
  /** 是否显示设置按钮和面板 */
  showSettings: boolean
  /** 布局模式 */
  layoutMode: LayoutModeEnum
  /** 是否显示标签栏 */
  showTagsView: boolean
  /** 是否显示 Logo */
  showLogo: boolean
  /** 是否固定 Header */
  fixedHeader: boolean
  /** 是否显示页脚 */
  showFooter: boolean
  /** 是否显示消息通知 */
  showNotify: boolean
  /** 是否显示切换主题按钮 */
  showThemeSwitch: boolean
  /** 是否显示全屏按钮 */
  showScreenfull: boolean
  /** 是否显示搜索按钮 */
  showSearchMenu: boolean
  /** 是否缓存标签栏 */
  cacheTagsView: boolean
  /** 开启系统水印 */
  showWatermark: boolean
  /** 是否显示灰色模式 */
  showGreyMode: boolean
  /** 是否显示色弱模式 */
  showColorWeakness: boolean
}

/** 默认配置 */
const DEFAULT_CONFIG: LayoutsConfig = {
  layoutMode: LayoutModeEnum.Left, // 布局模式
  showSettings: true, // 显示设置按钮
  showTagsView: true, // 显示标签栏
  fixedHeader: true, // 固定 Header
  showFooter: true, // 显示页脚
  showLogo: true, // 显示 Logo
  showNotify: true, // 显示消息通知
  showThemeSwitch: true, // 显示切换主题按钮
  showScreenfull: true, // 显示全屏按钮
  showSearchMenu: true, // 显示搜索按钮
  cacheTagsView: false, // 是否缓存标签栏
  showWatermark: false, // 开启系统水印
  showGreyMode: false, // 显示灰色模式
  showColorWeakness: false // 显示色弱模式
}

/** 项目配置 */
export const layoutsConfig: LayoutsConfig = { ...DEFAULT_CONFIG, ...getLayoutsConfig() }
