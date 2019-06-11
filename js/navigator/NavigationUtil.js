export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param params
   * @param pageName
   * */
  static goPage(params, pageName) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate(
      pageName,
      {
        ...params
      }
    )
  }

  /**
   * 返回上一页
   * @param navigation
   * */
  static goBack(navigation) {
    navigation.goBack();
  }

  /**
   * 重置到首页
   * @param params
   * */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}