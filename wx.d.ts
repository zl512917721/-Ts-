/**
 * 微信小游戏接口 https://developers.weixin.qq.com/minigame/dev/index.html
 */
declare let wx: WXSystemAPIs & WXUpdateAPIs & WXAppAPIs & WXSubAPIs & WXAdAPIs & WXInteractiveAPIs & WXKeyboardAPIs & WXStatusAPIs & WXWindowAPIs & WXMenuAPIs & WXNetworkAPIs & WXShareMenuAPIs & WXMidasPaymentAPIs & WXLocalStorageAPIs & WXAudioAPIs & WXImageAPIs & WXRecorderAPIs & WXVideoAPIs & WXLocationAPIs & WXFileSystemAPIs & WXOpenDataContext & WXOpenAPIs & WXEquipAPIs & WXWorkerAPIs & WXAldAPIs & WXCustomAPIs 

type WXLanguage = 'en'|'zh_CN'|'zh_TW'

type WXNetworkType = 'wifi'|'2g'|'3g'|'4g'|'unknown'|'none'

type WXDeviceOrientation = 'portrait'|'landscape'|'landscapeReverse'

interface WXCallBackRes<T>{
    /** 成功回调 */
    success?: (o: T) => void
    /** 失败回调 */
    fail?: (e: any) => void
    /** 结束回调 */
    complete?: (o: any) => void
}

interface WXErrorRes{
    /** 错误信息 */
    errMsg: string
    /** 错误码 */
    errCode: number
}

interface WXSystemInfoRes{
    /** 设备品牌 */
    brand: string
    /** 设备型号 */
    model: string
    /** 设备像素比 */
    pixelRatio: number
    /** 屏幕宽度，单位px */
    screenWidth: number
    /** 屏幕高度，单位px */
    screenHeight: number
    /** 可使用窗口宽度，单位px */
    windowWidth: number
    /** 可使用窗口高度，单位px */
    windowHeight: number
    /** 状态栏的高度，单位px */
    statusBarHeight: number
    /** 微信设置的语言 */
    language: string
    /** 微信版本号 */
    version: string
    /** 操作系统及版本 */
    system: string
    /** 客户端平台 */
    platform: string
    /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 */
    fontSizeSetting: number
    /** 客户端基础库版本 */
    SDKVersion: string
    /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50 */
    benchmarkLevel: number
    /** 允许微信使用相册的开关（仅 iOS 有效） */
    albumAuthorized: boolean
    /** 允许微信使用摄像头的开关 */
    cameraAuthorized: boolean
    /** 允许微信使用定位的开关 */
    locationAuthorized: boolean
    /** 允许微信使用麦克风的开关 */
    microphoneAuthorized: boolean
    /** 允许微信通知的开关 */
    notificationAuthorized: boolean
    /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
    notificationAlertAuthorized: boolean
    /** 允许微信通知带有标记的开关（仅 iOS 有效） */
    notificationBadgeAuthorized: boolean
    /** 允许微信通知带有声音的开关（仅 iOS 有效） */
    notificationSoundAuthorized: boolean
    /** 蓝牙的系统开关	 */
    bluetoothEnabled: boolean
    /** 地理位置的系统开关 */
    locationEnabled: boolean
    /** Wi-Fi 的系统开关 */
    wifiEnabled: boolean

}

/** 系统 */
interface WXSystemAPIs{
    /** 获取系统信息(同步) */
    getSystemInfoSync: () => WXSystemInfoRes
    /** 获取系统信息 */
    getSystemInfo(o: WXCallBackRes<WXSystemInfoRes>)
}

/** 更新 */
interface WXUpdateManager{
    /** 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。 */
    applyUpdate: () => void
    /** 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
    onCheckForUpdate: (c: Function) => void
    /** 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
    onUpdateReady: (c: Function) => void
    /** 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
    onUpdateFailed: (c: Function) => void
}

interface WXShowRes{
    /** 场景值 */
    scene: number
    /** 查询参数 */
    query: any
    /** shareTicket */
    shareTicket: string
    /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
    referrerInfo: WXReferrerInfo
}

/** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
interface WXReferrerInfo{
    /** 来源小程序或公众号或App的 appId */
    appId: string
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData: any
}

interface WXUpdateAPIs{
    /** 获取全局唯一的版本更新管理器，用于管理小程序更新 */
    getUpdateManager: () => WXUpdateManager
}

interface  WXErrorCallBack{
    /** 错误日志 */
    message: string
    /** 错误调用堆栈 */
    stack: string
}

interface WXTouch{
    /** Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。 */
    identifier: number
    /** 触点相对于屏幕左边沿的 X 坐标。 */
    screenX: number
    /** 触点相对于屏幕上边沿的 Y 坐标。 */
    screenY: number
}

interface WXTouchRes{
    /** 当前所有触摸点的列表 */
    touches: Array<WXTouch>
    /** 触发此次事件的触摸点列表 */
    changedTouches: Array<WXTouch>
    /** 事件触发时的时间戳 */
    timeStamp: number
}

interface WXAppAPIs{
    /** 监听小游戏回到前台的事件 */
    onShow: (c?: (o: WXShowRes) => void ) => void
    /** 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
    onHide: (c?: (o: any)=> void) => void
    /** 取消监听小游戏回到前台的事件 */
    offShow: (c?: (o: any)=> void) => void
    /** 取消监听小游戏隐藏到后台事件 */
    offHide: (c?: (o: any)=> void) => void
    /** 获取小游戏启动时的参数。 */
    getLaunchOptionsSync: () => WXShowRes
    /** 退出当前小游戏 */
    exitMiniProgram: (o?: WXCallBackRes<any>) => void
    /** 监听全局错误事件 */
    onError: (c?: (o: WXErrorCallBack) => void) => void
    /** 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功 */
    onAudioInterruptionEnd: (c: (o: any) => void) => void
    /** 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。 */
    onAudioInterruptionBegin: (c: (o: any) => void) => void
    /** 取消监听全局错误事件 */
    offError: (c?: (o: any) => void) => void
    /** 取消监听音频中断结束事件 */
    offAudioInterruptionEnd: (c?: (o: any) => void) => void
    /** 取消监听音频因为受到系统占用而被中断开始事件 */
    offAudioInterruptionBegin: (c?: (o: any) => void) => void
    /** 监听开始触摸事件 */
    onTouchStart: (c:(o: WXTouchRes) => void) => void
    /** 监听触点移动事件 */
    onTouchMove: (c:(o: WXTouchRes) => void) => void
    /** 监听触摸结束事件 */
    onTouchEnd: (c:(o: WXTouchRes) => void) => void
    /** 监听触点失效事件 */
    onTouchCancel: (c:(o: WXTouchRes) => void) => void
    /** 取消监听开始触摸事件 */
    offTouchStart: (c?:(o: any) => void) => void
    /** 取消监听触点移动事件 */
    offTouchMove: (c?:(o: any) => void) => void
    /** 取消监听触摸结束事件 */
    offTouchEnd: (c?:(o: any) => void) => void
    /** 取消监听触点失效事件 */
    offTouchCancel: (c?:(o: any) => void) => void
}

interface WXSubPackageOpt extends WXCallBackRes<void>{
    /** 分包的名字，可以填 name 或者 root */
    name: string
}

interface WXSubPackageProgressRes{
    /** 分包下载进度百分比 */
    progress: number
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number
}

interface WXLoadSubpackageTask{
    /** 监听分包加载进度变化事件 version > 2.1.0 */
    onProgressUpdate: (c: (o: WXSubPackageProgressRes) => void) => void
}

interface WXSubAPIs{
    /** 触发分包加载 */
    loadSubpackage: (o: WXSubPackageOpt) => WXLoadSubpackageTask
}

interface WXRewardedVideoAd{
    /** 加载激励视频广告 */
    load: () => Promise<any>
    /** 显示激励视频广告 */
    show: () => Promise<any>
    /** 监听激励视频广告加载事件 */
    onLoad: (c?: () => void) => void
    /** 取消监听激励视频广告加载事件 */
    offLoad: (c?: () => void) => void
    /** 监听激励视频错误事件 */
    onError: (c?: (e: WXErrorRes) => void) => void
    /** 取消监听激励视频错误事件 */
    offError: (c?: () => void) => void
    /** 监听用户点击 关闭广告 按钮的事件 */
    onClose: (c?: (o: {
        /** 视频是否是在用户完整观看的情况下被关闭的 */
        isEnded: boolean
    }) => void) => void
    /** 取消监听用户点击 关闭广告 按钮的事件 */
    offClose: (c?: () => void) => void
}

interface WXVideoAd{
    /** 广告单元 id */
    adUnitId: string
}

interface WXBannerStyle{
    /** banner 广告组件的左上角横坐标 */
    left?: number
    /** banner 广告组件的左上角纵坐标 */
    top?: number
    /** banner 广告组件的宽度 */
    width?: number
    /** banner 广告组件的高度 */
    height?: number
    /** banner 广告组件经过缩放后真实的宽度 */
    realWidth?: number
    /** banner 广告组件经过缩放后真实的高度 */
    realHeight?: number
    
}

interface WXBannerOpt extends WXVideoAd{
    /** banner 广告组件的样式 */
    style: WXBannerStyle
}

interface WXBannerAd{
    /** banner 广告组件的样式 */
    style: WXBannerStyle
    /** 显示banner广告 */
    show: () => Promise<any>
    /** 监听 banner 广告尺寸变化事件 */
    onResize: (c: (o: WXBannerStyle) => void) => void
    /** 监听 banner 广告加载事件 */
    onLoad: (c: () => void) => void
    /** 监听 banner 广告错误事件 */
    onError: (c: (e: WXErrorRes) => void) => void
    /** 取消监听 banner 广告尺寸变化事件 */
    offResize: (c?: () => void) => void
    /** 取消监听 banner 广告加载事件 */
    offLoad: (c?: () => void) => void
    /** 取消监听 banner 广告错误事件 */
    offError: (c?: () => void) => void
    /** 隐藏 banner 广告 */
    hide: () => void
    /** 销毁 banner 广告 */
    destroy: () => void
}

interface WXAdAPIs{
    /** 创建激励视频广告组件 */
    createRewardedVideoAd: (o: WXVideoAd) => WXRewardedVideoAd
    /** 创建 banner 广告组件 */
    createBannerAd: (o: WXBannerOpt) => WXBannerAd
}

interface WXToastOpt extends WXCallBackRes<any>{
    /** 提示的内容 */
    title: string
    /** 图标 */
    icon?: 'success' | 'loading' | 'none'
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string
    /** 提示的延迟时间 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
}

interface WXModelRes{
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean
    /** 为 true 时，表示用户点击了取消 */
    cancel: boolean
}

interface WXModelOpt extends WXCallBackRes<WXModelRes>{
    /** 提示的标题 */
    title?: string
    /** 提示的内容 */
    content: string
    /** 是否显示取消按钮 */
    showCancel?: boolean
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
}

interface WXLoadingOpt extends WXCallBackRes<any>{
    /** 提示的内容 */
    title: string
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
}

interface WXActionSheetOpt extends WXCallBackRes<any>{
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: Array<string>
    /** 按钮的文字颜色 */
    itemColor?: string
    success?: (o: {
        /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
        tapIndex: number
    }) => void
}

interface WXInteractiveAPIs{
    /** 显示消息提示框 */
    showToast: (o: WXToastOpt) => void
    /** 显示模态对话框 */
    showModal: (o: WXModelOpt) => void
    /** 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框 */
    showLoading: (o: WXLoadingOpt) => void
    /** 显示操作菜单 */
    showActionSheet: (o: WXActionSheetOpt) => void
    /** 隐藏消息提示框 */
    hideToast: (o?: WXCallBackRes<void>) => void
    /** 隐藏 loading 提示框 */
    hideLoading: (o?: WXCallBackRes<void>) => void
}

interface WXUpdateKeyboardOpt extends WXCallBackRes<void>{
    /** 键盘输入框的当前值 */
    value: string
}

interface WXShowKeyboardOpt extends WXCallBackRes<void>{
    /** 键盘输入框显示的默认值 */
    defaultValue: string
    /** 键盘中文本的最大长度 */
    maxLength: number
    /** 是否为多行输入 */
    multiple: boolean
    /** 当点击完成时键盘是否收起 */
    confirmHold: boolean
    /** 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容 */
    confirmType: string
}

interface WXKeyboardAPIs{
    /** 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果 >2.1.0 */
    updateKeyboard: (o: WXUpdateKeyboardOpt) => void
    /** 显示键盘 */
    showKeyboard: (o: WXShowKeyboardOpt) => void
    /** 监听键盘输入事件 */
    onKeyboardInput: (c: (o: {
        /** 键盘输入的当前值 */
        value: any
    }) => void ) => void
    /** 监听用户点击键盘 Confirm 按钮时的事件 */
    onKeyboardConfirm: (c: (o: {
        /** 键盘输入的当前值 */
        value: any
    }) => void ) => void
    /** 监听监听键盘收起的事件 */
    onKeyboardComplete: (c: (o: {
        /** 键盘输入的当前值 */
        value: any
    }) => void ) => void
    /** 取消监听键盘输入事件 */
    offKeyboardInput: (c?: () => void) => void
    /** 取消监听用户点击键盘 Confirm 按钮时的事件 */
    offKeyboardConfirm: (c?: () => void) => void
    /** 取消监听监听键盘收起的事件 */
    offKeyboardComplete: (c?: () => void) => void
    /** 隐藏键盘 */
    hideKeyboard: (o?: WXCallBackRes<void>) => void
}

interface WXMenuStyleOpt extends WXCallBackRes<void>{
    /** 样式风格 */
    style: 'light' | 'dark'
}

interface WXMenuOpt{
    /** 宽度，单位：px */
    width: number
    /** 高度，单位：px */
    height: number
    /** 上边界坐标，单位：px */
    top: number
    /** 右边界坐标，单位：px */
    right: number
    /** 下边界坐标，单位：px */
    bottom: number
    /** 左边界坐标，单位：px */
    left: number
}

interface WXMenuAPIs{
    /** 动态设置通过右上角按钮拉起的菜单的样式。 */
    setMenuStyle: (o: WXMenuStyleOpt) => void
    /** 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。 */
    getMenuButtonBoundingClientRect: () => WXMenuOpt
}

interface WXStatusOps extends WXCallBackRes<void>{
    /** 样式风格 */
    style: 'white'|'black'
}

interface WXStatusAPIs{
    /** 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。 */
    setStatusBarStyle: (o: WXStatusOps) => void
}

interface WXWindowRes{
    /** 变化后的窗口宽度, 单位px */
    windowWidth: number
    /** 变化后的窗口高度，单位 px */
    windowHeight: number
}

interface WXWindowAPIs{
    /** 监听窗口尺寸变化事件 */
    onWindowResize: (c: (o: WXWindowRes) => void) => void
    /** 取消监听窗口尺寸变化事件 */
    offWindowResize: (c?: () => void) => void
}

interface WXRequestOpt extends WXCallBackRes<WXRequestResOpt>{
    /** 开发者服务器接口地址 */
    url: string
    /** 请求的参数 */
    data?: string|any|ArrayBuffer
    /** 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json */
    header?: any
    /** HTTP 请求方法 */
    method?: 'OPTIONS'|'GET'|'HEAD'|'POST'|'PUT'|'DELETE'|'TRACE'|'CONNECT'
    /** 返回的数据格式 */
    dataType?: string
    /** 响应的数据类型 */
    responseType?: string
}

interface WXRequestResOpt{
    /** 开发者服务器返回的数据 */
    data: string|any|ArrayBuffer
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
    /** 开发者服务器返回的 HTTP Response Header */
    header: any
}

interface WXRequestTask{
    /** 中断请求任务 */
    abort: () => void
    /** 监听 HTTP Response Header 事件。会比请求完成事件更早 >2.1.0*/
    onHeadersReceived: (c: (o: WXSocketHeaderCallBackRes) => void) => void
    /** 取消监听 HTTP Response Header 事件 >2.1.0 */
    offHeadersReceived: (c?: () => void) => void
}

interface WXDownloadOpt extends WXCallBackRes<any>{
    /** 下载资源的url */
    url: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: any
    /** 指定文件下载后存储的路径 >1.8.0 */
    filePath?: string
}

interface WXDownloadUpdateOpt{
    /** 下载进度百分比 */
    progress: number
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number
}

interface WXDownloadTask{
    /** 中断下载任务 */
    abort: () => void
    /** 监听下载进度变化事件 >2.1.0*/
    onProgressUpdate: (c: (o: WXDownloadUpdateOpt) => void) => void
    /** 取消监听下载进度变化事件 >2.1.0*/
    offProgressUpdate: (c?: () => void) => void
    /** 监听 HTTP Response Header 事件。会比请求完成事件更早 */
    onHeadersReceived: (c: (o: WXSocketHeaderCallBackRes) => void) => void
    /** 取消监听 HTTP Response Header 事件 >2.1.0 */
    offHeadersReceived: (c?: () => void) => void
}

/** 完全继承DownloadTask */
interface WXUploadTask extends WXDownloadTask{

}

interface WXUploadSuccessRes{
    /** 开发者服务器返回的数据 */
    data: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
}

interface WXUploadOpt extends WXCallBackRes<WXUploadSuccessRes>{
    /** 开发者服务器地址 */
    url: string
    /** 要上传文件资源的路径 */
    filePath: string
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string
    /** HTTP 请求 Header，Header 中不能设置 Referer */
    header?: any
    /** HTTP 请求中其他额外的 form data */
    formData?: any
}

interface WXSocketOpt extends WXCallBackRes<any>{
    /** 需要发送的内容 */
    data: string|ArrayBuffer
}

interface WXSocketHeaderCallBackRes{
    /** 连接成功的 HTTP 响应 Header >2.0.0*/
    header: any
}

interface WXSocketDataCallBackRes{
    /** 服务器返回的消息 */
    data: string|ArrayBuffer
}

interface WXSocketTask{
    /** 通过 WebSocket 连接发送数据 */
    send: (o: WXSocketOpt) => void
    /** 监听 WebSocket 连接打开事件 */
    onOpen: (c: (o: WXSocketHeaderCallBackRes) => void) => void
    /** 监听 WebSocket 接受到服务器的消息事件 */
    onMessage: (c: (o: WXSocketDataCallBackRes) => void) => void
    /** 监听 WebSocket 错误事件 */
    onError: (c: (o: WXErrorRes) => void) => void
    /** 监听 WebSocket 连接关闭事件 */
    onClose: (c: () => void) => void
    /** 关闭 WebSocket 连接 */
    close: (c?: (o: WXCloseSocketRes) => void) => void
}

interface WXSocketConnectOpt extends WXCallBackRes<any>{
    /** 开发者服务器 wss 接口地址 */
    url: string
    /** HTTP Header，Header 中不能设置 Referer */
    header?: any
    /** 子协议数组 */
    protocols?: Array<string>
    /** 建立 TCP 连接的时候的 TCP_NODELAY 设置 */
    tcpNoDelay?: boolean
}

interface WXCloseSocketRes extends WXCallBackRes<any>{
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
    code?: number
    /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
    reason?: string
}

interface WXNetworkAPIs{
    /** 发起网络请求 */
    request: (o: WXRequestOpt) => WXRequestTask
    /** 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径. */
    downloadFile: (o: WXDownloadOpt) => WXDownloadTask
    /** 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data */
    uploadFile: (o: WXUploadOpt) => WXUploadTask
    /** 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。 */
    sendSocketMessage: (o: WXSocketOpt) => void
    /** 监听 WebSocket 连接打开事件 */
    onSocketOpen: (c: (o: WXSocketHeaderCallBackRes) => void) => void
    /** 监听 WebSocket 接受到服务器的消息事件 */
    onSocketMessage: (c: (o: WXSocketDataCallBackRes) => void) => void
    /** 监听 WebSocket 错误事件 */
    onSocketError: (c: (o: Error) => void) => void
    /** 监听 WebSocket 连接关闭事件 */
    onSocketClose: (c: () => void) => void
    /** 创建一个 WebSocket 连接 */
    connectSocket: (o: WXSocketConnectOpt) => WXSocketTask
    /** 关闭 WebSocket 连接 */
    closeSocket: (o?: WXCloseSocketRes) => void
}

interface WXUpdateShareMenuOpt extends WXCallBackRes<void>{
    /** 是否使用带 shareTicket 的转发 */
    withShareTicket?: boolean
    /** 是否是动态消息 */
    isUpdatableMessage?: boolean
    /** 动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取 */
    activityId?: string
    /** 动态消息的模板信息 */
    templateInfo?: any
}

interface WXShareMenuOpt extends WXCallBackRes<void>{
    /** 是否使用带 shareTicket 的转发 */
    withShareTicket?: boolean
}

interface WXShareAppOpt extends WXCallBackRes<any>{
    /** 转发标题，不传则默认使用当前小游戏的昵称。 */
    title?: string
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
    imageUrl?: string
    /** 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchInfoSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。 */
    query?: string
    /** 审核通过的图片 ID */
    imageUrlId?: string
}   

interface WXShareGetOpt extends WXCallBackRes<any>{
    /** shareTicket */
    shareTicket: string
    /** 超时时间，单位 ms */
    timeout?: number
}

interface WXShareMenuAPIs{
    /** 更新转发属性 */
    updateShareMenu: (o: WXUpdateShareMenuOpt)=> void
    /** 显示当前页面的转发按钮 */
    showShareMenu: (o: WXShareMenuOpt) => void
    /** 主动拉起转发，进入选择通讯录界面。 */
    shareAppMessage: (o: WXShareAppOpt) => void
    /** 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    onShareAppMessage: (c: () => WXShareAppOpt) => void
    /** 取消监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    offShareAppMessage: (c?: () => void) => void
    /** 隐藏转发按钮 */
    hideShareMeny: (o: WXCallBackRes<void>) => void
    /** 获取转发详细信息 */
    getShareInfo: (o: WXShareGetOpt) => void
}

interface WXMidasPaymentOpt extends WXCallBackRes<any>{
    /** 支付的类型，不同的支付类型有各自额外要传的附加参数。 */
    mode: 'game'
    /** 环境配置 */
    env?: 0|1
    /** 在米大师侧申请的应用 id */
    offerId: string
    /** 币种 */
    currencyType: 'CNY'
    /** 申请接入时的平台，platform 与应用id有关。 */
    platform?: 'android'
    /** 购买数量。mode=game 时必填。购买数量。 */
    buyQuantity?: number
    /** 分区 ID */
    zoneId?: string
}

interface WXMidasPaymentAPIs{
    /** 发起米大师支付 */
    requestMidasPayment: (o: WXMidasPaymentOpt) => void
}

interface WXStorageOpt extends WXCallBackRes<void>{
    /** 本地缓存中指定的 key */
    key: string
    /** 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。 */
    data: any
}

interface WXStorageKeyOpt<T> extends WXCallBackRes<T>{
    /** 本地缓存中指定的 key */
    key: string
}

interface WXStorageRes{
    /** 当前 storage 中所有的 key */
    keys: Array<string>
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number
    /** 限制的空间大小，单位 KB */
    limitSize: number
}

interface WXLocalStorageAPIs{
    /** wx.setStorage 的同步版本 */
    setStorageSync: (o: WXStorageOpt) => void
    /** 将数据存储在本地缓存中指定的 key 中。*/
    setStorage: (o: WXStorageOpt) => void
    /** wx.removeStorage 的同步版本 */
    removeStorageSync: (o: string) => void
    /** 从本地缓存中移除指定 key */
    removeStorage: (o: WXStorageKeyOpt<void>) => void
    /** wx.getStorage 的同步版本 */
    getStorageSync: (o: string) => any
    /** wx.getStorageInfo 的同步版本 */
    getStorageInfoSync: () => WXStorageRes
    /** 异步获取当前storage的相关信息 */
    getStorageInfo: (o?: WXCallBackRes<any>) => WXStorageRes
    /** 从本地缓存中异步获取指定 key 的内容 */
    getStorage: (o: WXStorageKeyOpt<{data: any}>) => void
    /** wx.clearStorage 的同步版本 */
    clearStorageSync: () => void
    /** 清理本地数据缓存 */
    clearStorage: (o?: WXCallBackRes<void>) => void
}

interface WXAudioOpt extends WXCallBackRes<void>{
    /** 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 */
    mixWithOther?: boolean
    /** （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 */
    obeyMuteSwitch?: boolean
}

interface WXInnerAudioContext{
    /** 音频资源的地址，用于直接播放 */
    src: string
    /** 开始播放的位置（单位：s） */
    startTime: number
    /** 是否自动开始播放 */
    autoplay: boolean
    /** 是否循环播放 */
    loop: boolean
    /** 是否遵循系统静音开关 */
    obeyMuteSwitch: boolean
    /** 音量。范围 0~1 */
    volumn: number
    /** 当前音频的长度（单位 s） */
    readonly duration: number 
    /** 当前音频的播放位置 */
    readonly currentTime: number
    /** 当前是是否暂停或停止状态 */
    readonly paused: boolean
    /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲 */
    readonly buffered: boolean
    /** 播放 */
    play: () => void
    /** 暂停 */
    pause: () => void
    /** 停止。停止后的音频再播放会从头开始播放。 */
    stop: () => void
    /** 跳转到指定位置 */
    seek: (o: number) => void
    /** 销毁当前实例 */
    destroy: () => void
    /** 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
    onCanplay: (c: () => void) => void
    /** 取消监听音频进入可以播放状态的事件 */
    offCanplay: (c?: () => void) => void
    /** 监听音频播放事件 */
    onPlay: (c: () => void) => void
    /** 取消监听音频播放事件 */
    offPlay: (c?: () => void) => void
    /** 监听音频暂停事件 */
    onPause: (c: () => void) => void
    /** 取消监听音频暂停事件 */
    offPause: (c?: () => void) => void
    /** 监听音频停止事件 */
    onStop: (c: () => void) => void
    /** 取消监听音频停止事件 */
    offStop: (c?: () => void) => void
    /** 监听音频自然播放至结束的事件 */
    onEnded: (c: () => void) => void
    /** 取消监听音频自然播放至结束的事件 */
    offEnded: (c?: () => void) => void
    /** 监听音频播放进度更新事件 */
    onTimeUpdate: (c: () => void) => void
    /** 取消监听音频播放进度更新事件 */
    offTimeUpdate: (c?: () => void) => void
    /** 监听音频播放错误事件 */
    onError: (c: () => void) => void
    /** 取消监听音频播放错误事件 */
    offError: (c?: () => void) => void
    /** 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting: (c: () => void) => void
    /** 取消监听音频加载中事件 */
    offWaiting: (c?: () => void) => void
    /** 监听音频进行跳转操作的事件 */
    onSeeking: (c: () => void) => void
    /** 取消监听音频进行跳转操作的事件 */
    offSeeking: (c?: () => void) => void
    /** 监听音频完成跳转操作的事件 */
    onSeeked: (c: () => void) => void
    /** 取消监听音频完成跳转操作的事件 */
    offSeeked: (c?: () => void) => void
}

interface WXAudioAPIs{
    /** 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。 */
    setInnerAudioOption: (o: WXAudioOpt) => void
    /** 获取当前支持的音频输入源 >2.1.0 */
    getAvailableAudioSources: (o: WXCallBackRes<{
        /** 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用。 */
        audioSources: Array<'auto'|'buildInMic'|'headsetMic'|'mic'|'camcorder'|'voice_communication'|'voice_recognition'>
    }>) => void
    /** 创建内部 audio 上下文 InnerAudioContext 对象 */
    createInnerAudioContext: () => WXInnerAudioContext
}

interface WXFilePathOpt<T> extends WXCallBackRes<any>{
    /** 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径 */
    filePath: string
}

interface WXPreImageOpt extends WXCallBackRes<any>{
    /** 需要预览的图片链接列表。2.2.3 起支持云文件ID。 */
    urls: Array<string>
    /** 当前显示图片的链接 */
    current?: string
}

interface WXChooseImageOpt extends WXCallBackRes<void>{
    /** 最多可以选择的图片张数 */
    count?: number
    /** 所选的图片的尺寸 */
    sizeType?: Array<string>
    /** 选择图片的来源 */
    sourceType?: Array<string>
}

interface WXImageAPIs{
    /** 保存图片到系统相册。 */
    saveImageToPhotosAlbum: (o: WXFilePathOpt<any>) => void
    /** 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。 */
    previewImage: (o: WXPreImageOpt) => void
    /** 从本地相册选择图片或使用相机拍照。 */
    chooseImage: (o: WXChooseImageOpt) => void
}

interface WXRecorderOpt{
    /** 录音的时长，单位 ms，最大值 600000（10 分钟） */
    duration?: number
    /** 采样率 */
    sampleRate?: number
    /** 录音通道数 */
    numberOfChannels?: 1|2
    /** 编码码率，有效值见下表格 */
    encodeBitRate?: number
    /** 音频格式 */
    format?: 'mp3'|'aac'
    /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 */
    frameSize?: number
    /** 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源 */
    audioSource?: string
}

interface WXFrameRecordRes{
    /** 录音分片数据 */
    frameBuffer: ArrayBuffer
    /** 当前帧是否正常录音结束前的最后一帧 */
    isLastFrame: boolean
}

interface WXRecorderManager{
    /** 开始录音 */
    start: (o: WXRecorderOpt) => void
    /** 暂停录音 */
    pause: () => void
    /** 继续录音 */
    resume: () => void
    /** 停止录音 */
    stop: () => void
    /** 监听录音开始事件 */
    onStart: (c: () => void) => void
    /** 监听录音继续事件 */
    onResume: (c: () => void) => void
    /** 监听录音暂停事件 */
    onPause: (c: () => void) => void
    /** 监听录音结束事件 */
    onStop: (c: () => void) => void
    /** 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
    onFrameRecorded: (c: (o: WXFrameRecordRes) => void) => void
    /** 监听录音错误事件 */
    onError: (c: (o: WXErrorRes) => void) => void
    /** 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发 */
    onInterruptionBegin: (c: () => void) => void
    /** 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。 > 2.3.0 */
    onInterruptionEnd: (c: () => void) => void
}

interface WXRecorderAPIs{
    /** 获取全局唯一的录音管理器 RecorderManager */
    getRecorderManager: () => WXRecorderManager
}

interface WXVideoOpt{
    /** 视频的左上角横坐标 */
    x?: number
    /** 视频的左上角纵坐标 */
    y?: number
    /** 视频的宽度 */
    width?: number
    /** 视频的高度 */
    height?: number
    /** 视频的资源地址 */
    src: string
    /** 视频的封面 */
    poster: string
    /** 视频的初始播放位置，单位为 s 秒 */
    initialTime?: number
    /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
    playbackRate?: number
    /** 视频是否为直播 */
    live?: boolean
    /** 视频的缩放模式 */
    objectFit?: 'fill'|'contain'|'cover'
    /** 视频是否显示控件 */
    controls?: boolean
    /** 视频是否自动播放 */
    autoplay?: boolean
    /** 视频是否是否循环播放 */
    loop?: boolean
    /** 视频是否禁音播放 */
    muted?: boolean
    /** 是否启用手势控制播放进度 */
    enableProgressGesture?: boolean
    /** 是否显示视频中央的播放按钮 */
    showCenterPlayBtn?: boolean
}

interface WXVideoTimeUpdateRes{
    /** 当前的播放位置，单位为秒 */
    position: number
    /** 视频的总时长，单位为秒 */
    duration: number
}

interface WXVideoManager{
    /** 销毁视频 */
    destroy: () => void
    /** 播放视频 */
    play: () => Promise<any>
    /** 暂停视频 */
    pause: () => Promise<any>
    /** 停止视频 */
    stop: () => Promise<any>
    /** 视频跳转 */
    seek: (o: number) => Promise<any>
    /** 视频全屏 */
    requestFullScreen: () => Promise<any>
    /** 视频退出全屏 */
    exitFullScreen: () => Promise<any>
    /** 监听视频缓冲事件 */
    onWaiting: (c: () => void) => void
    /** 取消监听视频缓冲事件 */
    offWaiting: (c?: () => void) => void
    /** 监听视频播放事件 */
    onPlay: (c: () => void) => void
    /** 取消监听视频播放事件 */
    offPlay: (c?: () => void) => void
    /** 监听视频暂停事件 */
    onPause: (c: () => void) => void
    /** 监听视频暂停事件 */
    offPause: (c?: () => void) => void
    /** 监听视频播放到末尾事件 */
    onEnded: (c: () => void) => void
    /** 取消监听视频播放到末尾事件 */
    offEnded: (c?: () => void) => void
    /** 监听视频播放进度更新事件 */
    onTimeUpdate: (c: (o: WXVideoTimeUpdateRes) => void) => void
    /** 取消监听视频播放进度更新事件 */
    offTimeUpdate: (c?: (o: WXVideoTimeUpdateRes) => void) => void
    /** 监听视频错误事件 */
    onError: (c: (o: WXErrorRes) => void) => void
    /** 取消监听视频错误事件 */
    offError: (c?: () => void) => void
}

interface WXVideoAPIs{
    /** 创建视频 */
    createVideo: (o: WXVideoOpt) => WXVideoManager
}

interface WXLocationRes{
    /** 纬度，范围为 -90~90，负数表示南纬 */
    latitude: number
    /** 经度，范围为 -180~180，负数表示西经 */
    longitude: number
    /** 速度，单位 m/s */
    speed: number
    /** 位置的精确度 */
    accuracy: number
    /** 高度，单位 m */
    altitude: number
    /** 垂直精度，单位 m（Android 无法获取，返回 0） */
    verticalAccuracy: number
    /** 水平精度，单位 m */
    horizontalAccuracy: number
}

interface WXLocationOpt extends WXCallBackRes<WXLocationRes>{
    /** wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 */
    type?: string
    /** 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 */
    altitude?: boolean
}

interface WXLocationAPIs{
    /** 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。 */
    getLocation: (o: WXLocationOpt) => void
}

interface WXFileSystemOpt extends WXCallBackRes<void>{
    /** 要判断是否存在的文件/目录路径 */
    path: string
}

interface WXFileAppendOpt extends WXCallBackRes<any>{
    /** 要追加内容的文件路径 */
    filePath: string
    /** 要追加的文本或二进制数据 */
    data: string|ArrayBuffer
    /** 指定写入文件的字符编码 */
    encoding?: string
}

interface WXCopyFileOpt extends WXCallBackRes<void>{
    /** 源文件路径，只可以是普通文件 */
    srcPath: string
    /** 目标文件路径 */
    destPath: string
}

interface WXFileInfoRes{
    /** 文件大小，以字节为单位 */
    size: number
}

interface WXFileListOpt{
    /** 本地路径 */
    filePath: string
    /** 本地文件大小，以字节为单位 */
    size: number
    /** 本地文件大小，以字节为单位 */
    createTime: number
}

interface WXFileListRes{
    /** 文件数组 */
    fileList: Array<WXFileListOpt>
}

interface WXFileDirOpt extends WXCallBackRes<void>{
    /** 创建的目录路径 */
    dirPath: string
    /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录 */
    recursive?: boolean
}

interface WXReadDirRes{
    /** 指定目录下的文件名数组。 */
    files: Array<string>
}

interface WXReadDirOpt extends WXCallBackRes<WXReadDirRes>{
    /** 要读取的目录路径 */
    dirPath: string
}

interface WXReadFileDataRes{
    /** 文件内容 */
    data: string|ArrayBuffer
}

interface WXReadFileOpt extends WXCallBackRes<WXReadFileDataRes>{
    /** 要读取的文件的路径 */
    filePath: string
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding: string
}

interface WXRemoveFileOpt extends WXCallBackRes<void>{
    /** 需要删除的文件路径 */
    filePath: string
}

interface WXRenameFileOpt extends WXCallBackRes<void>{
    /** 源文件路径，可以是普通文件或目录 */
    oldPath: string
    /** 新文件路径 */
    newPath: string
}

interface WXRmdirFileOpt{
    /** 要删除的目录路径 */
    dirPath: string
    /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 */
    recursive?: boolean
}

interface WXSaveFileRes{
    /** 存储后的文件路径 */
    savedFilePath: string
}

interface WXSaveFileOpt extends WXCallBackRes<WXSaveFileRes>{
    /** 临时存储文件路径 */
    tempFilePath: string
    /** 要存储的文件路径 */
    filePath?: string
}

interface WXStats{
    /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
    mode: string
    /** 文件大小，单位：B，对应 POSIX stat.st_size */
    size: number
    /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
    lastAccessedTime: number
    /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
    lastModifiedTime: number
    /** 判断当前文件是否一个目录 */
    isDirectory: () => boolean
    /** 判断当前文件是否一个普通文件 */
    isFile: () => boolean
}

interface WXStatRes{
    /** 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 any，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。 */
    stats: WXStats|any
}

interface WXStatOpt extends WXCallBackRes<void>{
    /** 文件/目录路径 */
    path: string
    /** 是否递归获取目录下的每个文件的 Stats 信息 */
    recursive?: boolean
}

interface WXUnzipOpt extends WXCallBackRes<void>{
    /** 源文件路径，只可以是 zip 压缩文件 */
    zipFilePath: string
    /** 目标目录路径 */
    targetPath: string
}

interface WXWriteFileOpt extends WXCallBackRes<void>{
    /** 要写入的文件路径 */
    filePath: string
    /** 要写入的文本或二进制数据 */
    data: string|ArrayBuffer
    /** 指定写入文件的字符编码 */
    encoding?: string
}

interface WXFileSystemManager{
    /** 判断文件/目录是否存在 */
    access: (o: WXFileSystemOpt) => void
    /** FileSystemManager.access 的同步版本 */
    accessSync: (o: string) => void
    /** 在文件结尾追加内容 */
    appendFile: (o: WXFileAppendOpt) => void
    /** FileSystemManager.appendFile 的同步版本 */
    appendFileSync: (
        /** 要追加内容的文件路径 */
        filePath: string,
        /** 要追加的文本或二进制数据 */
        data: string|ArrayBuffer,
        /** 指定写入文件的字符编码 */
        encoding: string
    ) => void
    /** 复制文件 */
    copyFile: (o: WXCopyFileOpt) => void
    /** FileSystemManager.copyFile 的同步版本 */
    copyFileSync: (
        /** 源文件路径，只可以是普通文件 */
        srcPath: string, 
        /** 目标文件路径 */
        destPath: string
    ) => void
    /** 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
    getFileInfo: (o: WXFilePathOpt<WXFileInfoRes>) => void
    /** 获取该小程序下已保存的本地缓存文件列表 */
    getSavedFileList: (o: WXFileListRes) => void
    /** 创建目录 */
    mkdir: (o: WXFileDirOpt) => void
    /** 读取目录内文件列表 */
    readdir: (o: WXReadDirOpt) => void
    /** FileSystemManager.readdir 的同步版本 */
    readdirSync: (path: string) => Array<string>
    /** 读取本地文件内容 */
    readFile: (o: WXReadFileOpt) => void
    /** FileSystemManager.readFile 的同步版本 */
    readFileSync: (
        /** 要读取的文件的路径 */
        filePath: string, 
        /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
        encoding: string
    ) => void
    /** 删除该小程序下已保存的本地缓存文件 */
    removeSavedFile: (o: WXRemoveFileOpt) => void
    /** 重命名文件。可以把文件从 oldPath 移动到 newPath */
    rename: (o: WXRenameFileOpt) => void
    /** FileSystemManager.rename 的同步版本 */
    renameSync: (
        /** 源文件路径，可以是普通文件或目录 */
        oldPath: string,
        /** 新文件路径 */
        newPath: string
    ) => void
    /** FileSystemManager.mkdir 的同步版本 */
    mkdirSync: (o: {
        /** 创建的目录路径 */
        dirPath: string
        /** 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。 */
        recursive: boolean
    }) => void
    /** 删除目录 */
    rmdir: (o: WXRmdirFileOpt) => void
    /** FileSystemManager.rmdir 的同步版本 */
    rmdirSync: (
        /** 要删除的目录路径 */
        dirPath: string, 
        /** 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件 */
        recursive: boolean
    ) => void
    /** 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
    saveFile: (o: WXSaveFileOpt) => void
    /** FileSystemManager.saveFile 的同步版本 */
    saveFileSync: (
        /** 临时存储文件路径 */
        tempFilePath: string,
        /** 要存储的文件路径 */
        filePath: string
    ) => number
    /**  */
    stat: (o: WXStatOpt) => void
    /** FileSystemManager.stat 的同步版本 */
    statSync: (
        /** 文件/目录路径 */
        path: string,
        /** 是否递归获取目录下的每个文件的 Stats 信息 >2.3.0 */
        recursive: boolean
    ) => WXStats|any
    /** 删除文件 */
    unlink: (o: WXRemoveFileOpt) => void
    /** FileSystemManager.unlink 的同步版本 */
    unlinkSync: (unlinkSync: string) => void
    /** 解压文件 */
    unzip: (o: WXUnzipOpt) => void
    /** 写文件 */
    writeFile: (o: WXWriteFileOpt) => void
    /** FileSystemManager.writeFile 的同步版本 */
    writeFileSync: (
        /** 要写入的文件路径 */
        filePath: string,
        /** 要写入的文本或二进制数据 */
        data: string|ArrayBuffer,
        /** 指定写入文件的字符编码 */
        encoding: string
    ) => void
}

interface WXFileSystemAPIs{
    /** 创建目录 */
    getFileSystemManager: () => WXFileSystemManager   
}

interface WXLoginRes{
    /** 用户登录凭证（有效期五分钟） */
    code: string
}

interface WXLoginOpt extends WXCallBackRes<WXLoginRes>{
    /** 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成 */
    timeout?: number
}

interface WXNavOpt extends WXCallBackRes<any>{
    /** 要打开的小程序 appId */
    appId: string
    /** 打开的页面路径 */
    path?: string
    /** 需要传递给目标小程序的数据 */
    extraData?: any
    /** 要打开的小程序版本 */
    envVersion?: 'develop'|'trial'|'release'
}

interface WXNavBackOpt extends WXCallBackRes<any>{
    /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据。  */
    extraData?: any
}

interface WXMiniProgram{
    /** 小程序 appId */
    appId: string
}

interface WXPlugin{
    /** 插件 appId */
    appId: string
    /** 插件版本号 */
    version: string
}

interface WXAccountInfoRes{
    /** 小程序帐号信息 */
    miniProgram: WXMiniProgram
    /** 插件帐号信息（仅在插件中调用时包含这一项） */
    plugin: WXPlugin
}

interface WXUserInfo{
    /** 用户昵称 */
    userName: string
    /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 */
    avatarUrl: string
    /** 用户性别 */
    gender: 0|1|2
    /** 用户所在国家 */
    country: string
    /** 用户所在省份 */
    province: string
    /** 用户所在城市 */
    city: string
    /** 显示 country，province，city 所用的语言 */
    language: WXLanguage
}



interface WXUserInfoRes{
    /** 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: WXUserInfo
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
    signature: string
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string
    /** 加密算法的初始向量 */
    iv: string
    /** 错误信息 */
    errMsg?: string
}

interface WXUserinfoOpt extends WXCallBackRes<WXUserInfoRes>{
    /** 是否带上登录态信息 */
    withCredentials?: boolean
    /** 显示用户信息的语言 */
    lang?: WXLanguage 
}

interface WXReportData{
    /** 配置中的字段名 */
    key: string
    /** 上报的数据 */
    value: any
}

type WXScope = 'userInfo'|'userLocation'|'address'|'invoiceTitle'|'invoice'|'werun'|'record'|'writePhotosAlbum'|'camera'

interface WXAuthOpt extends WXCallBackRes<void>{
    /** 需要获取权限的 scope */
    scope: WXScope
}

interface WXPayMentOpt extends WXCallBackRes<any>{
    /** 时间戳 */
    timeStamp: string
    /** 随机字符串，长度为32个字符以下 */
    nonceStr: string
    /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** */
    package: string
    /** 签名算法 */
    signType?: 'MD5'|'HMAC-SHA256'
    /** 签名 具体签名方案参见 https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3 */
    paySign: string
}

interface WXAuthSetting{
    scope: {
        /** 是否授权用户信息 */
        userInfo: boolean
        /** 是否授权地理位置 */
        userLocation: boolean
        /** 是否授权通讯地址 */
        address: boolean
        /** 是否授权发票抬头 */
        invoiceTitle: boolean
        /** 是否授权获取发票 */
        invoice: boolean
        /** 是否授权微信运动步数 */
        werun: boolean
        /** 是否授权录音功能 */
        record: boolean
        /** 是否授权保存到相册 */
        writePhotosAlbum: boolean
        /** 是否授权摄像头 */
        camera: boolean
    }

}

interface WXOpenSettingRes{
    /** 用户授权结果 */
    authSetting: WXAuthSetting
}

interface WXAddressRes{
    /** 收货人姓名 */
    userName: string
    /** 邮编 */
    postalCode: string
    /** 国标收货地址第一级地址 */
    provinceName: string
    /** 国标收货地址第一级地址 */
    cityName: string
    /** 国标收货地址第一级地址 */
    countyName: string
    /** 详细收货地址信息 */
    detailInfo: string
    /** 收货地址国家码 */
    nationalCode: string
    /** 收货人手机号码 */
    telNumber: string
    /** 错误信息 */
    errMsg: string
}

interface WXKVData{
    /** 数据的 key */
    key: string
    /** 数据的 value */
    value: string
}

interface WXSetUserCloudStorageOpt extends WXCallBackRes<void>{
    /** 要修改的 KV 数据列表 */
    KVDataList: Array<WXKVData> 
}

interface WXUserGameData{
    /** 用户的微信头像 url */
    avatarUrl: string
    /** 用户的微信昵称 */
    nickname: string
    /** 用户的 openid */
    openid: string
    /** 用户的托管 KV 数据列表 */
    KVDataList: Array<WXKVData>
}

interface WXUserCloudStorageOpt<T> extends WXCallBackRes<T>{
    /**	要操作的 key 列表 */
    keyList: Array<string>
}

interface WXGroupCloudStorageOpt<T> extends WXUserCloudStorageOpt<T>{
    /** 群分享对应的 shareTicket */
    shareTicket: string
}

interface WXCanvasToTempFileOpt extends WXCallBackRes<{tempFilePath: string}>{
    /** 截取 canvas 的左上角横坐标 */
    x?: number
    /** 截取 canvas 的左上角纵坐标 */
    y?: number
    /** 截取 canvas 的宽度 */
    width?: number
    /** 截取 canvas 的高度 */
    height?: number
    /** 目标文件的宽度，会将截取的部分拉伸或压缩至该数值 */
    destWidth?: number
    /** 目标文件的高度，会将截取的部分拉伸或压缩至该数值 */
    destHeight?: number
    /** 目标文件的类型 */
    filtType?: 'jpg'|'png'
    /** jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0 */
    quality?: number
}

interface WXContextAttributesOpt{
    /** 表示是否抗锯齿 */
    antialias?: boolean
    /** 表示是否绘图完成后是否保留绘图缓冲区 */
    preserveDrawingBuffer?: boolean
    /** 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持 */
    antialiasSamples?: number
}

interface WXCanvas{
    /** 画布的宽度 */
    wdith: number
    /** 画布的高度 */
    height: number
    /** 将当前 Canvas 保存为一个临时文件 */
    toTempFilePath: (o: WXCanvasToTempFileOpt) => string
    /** 获取画布对象的绘图上下文 */
    getContext: (
        /** 上下文类型 */
        contextType: '2d'|'webgl',
        /** webgl 上下文属性，仅当 contextType 为 webgl 时有效 */
        contextAttributes: WXContextAttributesOpt
    ) => any
    /** 把画布上的绘制内容以一个 data URI 的格式返回 */
    toDataURL: () => string
}

interface WXOpenDataContext{
    /** 开放数据域和主域共享的 sharedCanvas */
    canvas: WXCanvas
    /** 向开放数据域发送消息 */
    postMessage: (message: Object) => void
}

interface WXUserAdvisedToRestRes{
    /** 是否建议用户休息 */
    result: boolean
}

interface WXUserAdvisedToRestOpt extends WXCallBackRes<WXUserAdvisedToRestRes>{
    /** 今天已经玩游戏的时间，单位：秒 */
    todayPlayedTime	: number
}

interface WXButtonStyle{
    /** 左上角横坐标 */
    left?: number
    /** 左上角纵坐标 */
    top?: number
    /** 宽度 */
    width?: number
    /** 高度 */
    height?: number
    /** 背景颜色 */
    backgroundColor?: string
    /** 边框颜色 */
    borderColor?: string
    /** 边框宽度 */
    borderWidth?: number
    /** 边框圆角 */
    borderRadius?: number
    /** 文本的水平居中方式 */
    textAlign?: 'left'|'center'|'right'
    /** 字号 */
    fontSize?: number
    /** 文本的行高 */
    lineHeight?: number
}

interface WXButton{
    /** 按钮的类型 */
    type: 'text'|'image'
    /** 按钮上的文本，仅当 type 为 text 时有效 */
    text: string
    /** 按钮的背景图片，仅当 type 为 image 时有效 */
    image: string
    /** 按钮的样式 */
    style: WXButtonStyle
    /** 显示按钮 */
    show: () => void
    /** 隐藏按钮 */
    hide: () => void
    /** 销毁按钮 */
    destroy: () => void
    /** 监听按钮的点击事件 */
    onTap: (c?: () => void) => void
    /** 取消监听按钮的点击事件 */
    offTap: (c?: () => void) => void
}

interface WXButtonOpt{
     /** 按钮的类型 */
    type: 'text'|'image'
    /** 按钮上的文本，仅当 type 为 text 时有效 */
    text?: string
    /** 按钮的背景图片，仅当 type 为 image 时有效 */
    image?: string
    /** 按钮的样式 */
    style: WXButtonStyle
}

interface WXGameClubButtonOpt extends WXButtonOpt{
    /** 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。 */
    icon: 'green'|'white'|'dark'|'light'
}

interface WXGameClubButton extends WXButton{
    /** 游戏圈按钮的图标，仅当 type 参数为 image 时有效。 */
    icon: 'green'|'white'|'dark'|'light'
}

interface WXCustomerOpt extends WXCallBackRes<any>{
    /** 会话来源 */
    sessionFrom?: string
    /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息 */
    showMessageCard?: boolean
    /** 会话内消息卡片标题 */
    sendMessageTitle?: string
    /** 会话内消息卡片路径 */
    sendMessagePath?: string
    /** 会话内消息卡片图片路径 */
    sendMessageImg?: string
}

interface WXRunDataRes{
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string
    /** 加密算法的初始向量 */
    iv: string
}

interface WXOpenCardInfo{
    /** 卡券 ID */
    cardId: string
    /** 由 wx.addCard 的返回对象中的加密 code 通过解密后得到 */
    code: string
}

interface WXOpenCardOpt extends WXCallBackRes<void>{
    /** 需要打开的卡券列表 */
    cardList: Array<WXOpenCardInfo>
}

interface WXCardExt{
    /** 用户领取的 code，仅自定义 code 模式的卡券须填写，非自定义 code 模式卡券不可填写 */
    code?: string
    /** 指定领取者的 openid，只有该用户能领取。 bind_openid 字段为 true 的卡券必须填写，bind_openid 字段为 false 不可填写 */
    openid?: string
    /** 时间戳，东八区时间,UTC+8，单位为秒 */
    timestamp: number
    /** 随机字符串，由开发者设置传入，加强安全性 */
    nonce_str?: string
    /** 卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒） */
    fixed_begintimestamp?: string
    /** 领取渠道参数，用于标识本次领取的渠道值 */
    outer_str?: string
    /** 签名，商户将接口列表中的参数按照指定方式进行签名,签名方式使用 SHA1 */
    signature: string
}

interface WXAddCardInfo{
    /** 卡券 ID */
    cardId: string
    /** 卡券的扩展参数 */
    cardExt: WXCardExt
}

interface WXAddCardResInfo{
    /** 加密 code，为用户领取到卡券的code加密后的字符串 解密请参照：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V*/
    code: string
    /** 用户领取到卡券的 ID */
    cardId: string
    /** 卡券的扩展参数 */
    cardExt: WXCardExt
    /** 是否成功 */
    isSuccess: boolean
}

interface WXAddCardRes{
    /** 卡券添加结果列表 */
    cardList: Array<WXAddCardResInfo>
}

interface WXAddCardOpt extends WXCallBackRes<WXAddCardRes>{
    /** 需要添加的卡券列表 */
    cardList: Array<WXAddCardInfo>
}

interface WXUserInfoButtonOpt extends WXButtonOpt{
    /** 是否带上登录态信息 */
    withCredentials?: boolean
    /** 描述用户信息的语言 */
    lang?: WXLanguage
}


interface WXUserInfoButton extends WXButton{
    /** 监听用户信息按钮的点击事件 */
    onTap: (c: (o: WXUserInfoRes) => void) => void
}

interface WXOpenAPIs{
    /** 调用接口获取登录凭证（code） */
    login: (o: WXLoginOpt) => void
    /** 检查登录态是否过期 */
    checkSession: (o: WXCallBackRes<void>) => void
    /** 打开另一个小程序 */
    navigateToMiniProgram: (o: WXNavOpt) => void
    /** 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功 */
    navigateBackMiniProgram: (o: WXNavBackOpt) => void
    /** 获取当前帐号信息 */
    getAccountInfoSync: () => WXAccountInfoRes
    /** 获取用户信息 */
    getUserInfo: (o: WXUserinfoOpt) => void
    /** 创建用户信息按钮 */
    createUserInfoButton: (o: WXUserInfoButtonOpt) => WXUserInfoButton
    /** 自定义业务数据监控上报接口  tips:使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。*/
    reportMonitor: (
        /** 监控ID，在「小程序管理后台」新建数据指标后获得 */
        name: string,
        /** 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 */
        value: number
    ) => void
    /** 自定义分析数据上报接口 */
    reportAnalytics: (
        /** 事件名 */
        eventName: string,
        /** 上报的自定义数据 */
        data: WXReportData
    ) => void
    /** 发起微信支付 了解更多信息，请查看https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1 */
    requestPayment: (o: WXPayMentOpt) => void
    /** 提前向用户发起授权请求 更多用法详见 https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html */
    authorize: (o: WXAuthOpt) => void
    /** 对用户托管数据进行写数据操作。允许同时写多组 KV 数据 */
    setUserCloudStorage: (o: WXSetUserCloudStorageOpt) => void
    /** 删除用户托管数据当中对应 key 的数据 */
    removeUserCloudStorage: (o: WXUserCloudStorageOpt<void>) => void
    /** 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 */
    getUserCloudStorage: (o: WXUserCloudStorageOpt<{KVDataList: WXKVData[]}>) => void
    /** 获取主域和开放数据域共享的 sharedCanvas。只有开放数据域能调用。 */
    getSharedCanvas: () => WXCanvas
    /** 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口只可在开放数据域下使用。 */
    getGroupCloudStorage: (o: WXGroupCloudStorageOpt<{data: WXUserGameData[]}>) => void
    /** 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用 */
    getFriendCloudStorage: (o: WXUserCloudStorageOpt<{data: WXUserGameData[]}>) => void
    /** 监听主域发送的消息 */
    onMessage: (c: () => void) => void
    /** 获取开放数据域 */
    getOpenDataContext: () => WXOpenDataContext
    /** 根据用户当天游戏时间判断用户是否需要休息 */
    checkIsUserAdvisedToRest: (o: WXUserAdvisedToRestOpt) => void
    /** 创建打开意见反馈页面的按钮 > 2.1.2 */
    createFeedbackButton: (o: WXButtonOpt) => WXButton
    /** 调起客户端小程序设置界面，返回用户设置的操作结果 */
    openSetting: (o?: WXCallBackRes<WXOpenSettingRes>) => void
    /** 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限 */
    getSetting: (o: WXCallBackRes<WXOpenSettingRes>) => void
    /** 创建打开设置页面的按钮 >2.0.7 */
    createOpenSettingButton: (o: WXButtonOpt) => WXButton
    /** 创建游戏圈按钮 */
    createGameClubButton: (o: WXGameClubButtonOpt) => WXGameClubButton
    /** 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用 */
    openCustomerServiceConversation: (o: WXCustomerOpt) => void
    /** 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口 */
    getWeRunData: (o: WXCallBackRes<WXRunDataRes>) => void
    /** 查看微信卡包中的卡券 */
    openCard: (o: WXOpenCardOpt) => void
    /** 批量添加卡券 */
    addCard: (o: WXAddCardOpt) => void
    /** 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。 */
    chooseAddress: (o: WXCallBackRes<WXAddressRes>) => void
}

interface WXBatteryInfo{
    /** 设备电量，范围 1 - 100 */
    level: string
    /** 是否正在充电中 */
    isCharging: boolean
}

interface WXClipboardOpt extends WXCallBackRes<any>{
    /** 剪贴板的内容 */
    data: string
}

interface NetworkStatusRes{
    /** 当前是否有网络连接 */
    isConnected: boolean
    /** 网络类型 */
    networkType: WXNetworkType
}

interface WXScreenBrightnessOpt extends WXCallBackRes<void>{
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number
}

interface WXScreenBrightnessRes{
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number
}

interface WXKeepScreenOnOpt extends WXCallBackRes<void>{
    /** 设置是否保持常亮状态 */
    keepScreenOn: boolean
}

type WXInterval = 'game'|'ui'|'normal'

interface WXAccelerometerOpt extends WXCallBackRes<void>{
    /** 监听加速度数据回调函数的执行频率 */
    interval?: WXInterval
}

interface WXAccelerometerRes{
    /** X轴 */
    x: number
    /** Y 轴 */
    y: number
    /** Z 轴 */
    z: number
}

interface WXEquipAPIs{
    /** wx.getBatteryInfo 的同步版本 */
    getBatteryInfoSync: () => WXBatteryInfo
    /** 获取设备电量 */
    getBatteryInfo: (o: WXCallBackRes<WXBatteryInfo>) => void
    /** 设置系统剪贴板的内容 */
    setClipboardData: (o: WXClipboardOpt) => void
    /** 获取系统剪贴板的内容 */
    getClipboardData: (o: WXCallBackRes<{
        /** 剪贴板的内容 */
        data: string
    }>) => void
    /** 监听网络状态变化事件 */
    onNetworkStatusChange: (c: (o: NetworkStatusRes) => void) => void
    /** 获取网络类型 */
    getNetworkType: (o: WXCallBackRes<{
        /** 网络类型 */
        networkType: WXNetworkType
    }>) => void
    /** 设置屏幕亮度 */
    setScreenBrightness: (o: WXScreenBrightnessOpt) => void
    /** 设置是否保持常亮状态 */
    setKeepScreenOn: (o: WXKeepScreenOnOpt) => void
    /** 获取屏幕亮度 */
    getScreenBrightness: (o?: WXCallBackRes<WXScreenBrightnessRes>) => void
    /** 监听横竖屏切换事件 */
    onDeviceOrientationChange: (c: (o: {
        /** 表示切换后的屏幕是横屏还是竖屏 */
        value: WXDeviceOrientation
    }) => void) => void
    /** 取消监听横竖屏切换事件 */
    offDeviceOrientationChange: (c?: () => void) => void
    /** 停止监听加速度数据 */
    stopAccelerometer: (o?: WXCallBackRes<void>) => void
    /** 开始监听加速度数据 */
    startAccelerometer: (o: WXAccelerometerOpt) => void
    /** 监听加速度数据事件 */
    onAccelerometerChange: (c: (o: WXAccelerometerRes) => void) => void
    /** 开始监听罗盘数据 */
    startCompass: (o?: WXCallBackRes<void>) => void
    /** 停止监听罗盘数据 */
    stopCompass: (o?: WXCallBackRes<void>) => void
    /** 监听罗盘数据变化事件 */
    onCompassChange: (c: (o: {
        /** 面对的方向度数 */
        direction: number
        /** 精度 >2.4.0*/
        accuracy: number|string
    }) => void) => void
    /** 开始监听设备方向的变化 */
    startDeviceMotionListening: (o: WXAccelerometerOpt) => void
    /** 停止监听设备方向的变化 */
    stopDeviceMotionListening: (o?: WXCallBackRes<void>) => void
    /** 监听设备方向变化事件 */
    onDeviceMotionChange: (c: (o: {
        /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
        alpha: number
        /** 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。 */
        beta: number
        /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
        gamma: number
    }) => void) => void 
    /** 开始监听陀螺仪数据 >2.3.0*/
    startGyroscope: (o: WXAccelerometerOpt) => void
    /** 停止监听陀螺仪数据 >2.3.0 */
    stopGyroscope: (o?: WXCallBackRes<void>) => void
    /** 监听陀螺仪数据变化事件 */
    onGyroscopeChange: (c: (o: WXAccelerometerRes) => void) => void
    /** 监听内存不足告警事件 */
    onMemoryWarning: (c: (o: {
        /** 内存告警等级，只有 Android 才有，对应系统宏定义 */
        level: 5|10|15
    }) => void) => void
    /** 使手机发生较短时间的振动（15 ms) */
    vibrateShort: (o?: WXCallBackRes<void>) => void
    /** 使手机发生较长时间的振动（400 ms) */
    vibrateLong: (o?: WXCallBackRes<void>) => void
}

interface WXWorkerRes{
    /** 主线程/Worker 线程向当前线程发送的消息 */
    message: any
}

interface WXWorker{
    /** 监听主线程/Worker 线程向当前线程发送的消息的事件 */
    onMessage: (c: (o: WXWorkerRes) => void) => void
    /** 向主线程/Worker 线程发送的消息。 */
    postMessage: (o: Object) => void
    /** 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
    terminate: () => void
}

interface WXWorkerAPIs{
    /** 创建一个 Worker 线程 */
    createWorker: (scriptPath: string) => WXWorker
}

interface WXAldShareAppOpt extends WXShareAppOpt{
    /** 分享功能描述 */
    ald_desc?: string
}

interface WXAldStageStartOpt{
    /** 关卡ID */
    stageId: string
    /** 关卡名称 */
    stageName: string
    /** 用户ID */
    userId?: string
}

interface WXAldStageRunningParam{
    /** 商品/道具名称 */
    itemName: string
    /** 商品/道具ID */
    itemId?: string
    /** 商品/道具数量 */
    itemCount?: number
    /** 描述 */
    desc?: string
    /** 商品/道具价格 */
    itemMoney?: number
}

interface WXAldStageRunningOpt extends WXAldStageStartOpt{
    /** 事件类型 */
    event: string
    /** 事件参数 */
    params?: WXAldStageRunningParam
}

interface WXAldStageEndOpt extends WXAldStageStartOpt{
    /** 事件类型 */
    event: string
    /** 事件参数 */
    params?: {
        /** 描述 */
        desc?: string
    }
}

/** 阿拉丁统计 */
interface WXAldAPIs{
    /** 自定义事件埋点 */
    aldSendEvent: (name: string, data?: Object) => void
    /** 分享，监听用户点击右上角菜单的“转发”按钮时触发的事件 */
    aldOnShareAppMessage: (c: () => WXShareAppOpt) => void
    /** 主动拉起分享, 等同于wx.shareAppMessage*/
    aldShareAppMessage: (o: WXAldShareAppOpt) => void
    /** 关卡分析 */
    aldStage: {
        /** 关卡开始 */
        onStart: (o: WXAldStageStartOpt) => void
        /** 捕捉用户在关卡中的一些行为和操作 */
        onRunning: (o: WXAldStageRunningOpt) => void
        /** 捕捉用户在关卡中的一些操作 */
        onEnd: (o: WXAldStageEndOpt) => void
    }
}

/** 自定义事件(需要挂载在wx上的事件可以在这里编写) */
interface WXCustomAPIs{
    /** 寻光打点 */
    dot: {
        /** 初始化打点 */
        init: (o: {
            /** 游戏appid */
            appid: string,
            /** 用户openid */
            openid: string
        }) => void
        /** 发送授权信息 */
        auth: (o?: string) => void
        /** 发送自定义事件 */
        send: (o: string) => void
        /** 视频统计 */
        videoCount: () => void
        /** 分享统计 */
        shareCount: () => void
        /** 是否是新用户 */
        isNew: () => boolean
    }
    Base64;
    BigNumber
    version;
}