<template>
  <section class="banner">
    <div class="banner_menu">
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item banner_menu-item_auth"></div>
    </div>
    <div class="banner_sidebar">
      <div class="banner_sidebar-head">
        <div class="banner_sidebar-head_img"></div>
        <div class="banner_sidebar-head_title"></div>
      </div>
      <ul class="banner_sidebar-list">
        <li class="banner_sidebar-list_item">
          <p>Прозрачность процессов</p>
        </li>
        <li class="banner_sidebar-list_item">
          <p>Мотивация и комфорт</p>
        </li>
        <li class="banner_sidebar-list_item">
          <p>Риски</p>
        </li>
        <li class="banner_sidebar-list_item">
          <p>Процессы</p>
        </li>
        <li class="banner_sidebar-list_item">
          <p>Тайм трекинг</p>
        </li>
        <li class="banner_sidebar-list_item">
          <p>Отчеты</p>
        </li>
      </ul>
    </div>
    <div class="banner_content">
      <p class="banner_content-task">MD — 1</p>
      <div class="banner_content-list">
        <div class="banner_content-list_wrapper">
          <ul class="banner_content-list_block">
            <li class="banner_content-list_block-item">Type:</li>
            <li class="banner_content-list_block-item">Priority:</li>
            <li class="banner_content-list_block-item">Labels:</li>
            <li class="banner_content-list_block-item">Sprint:</li>
          </ul>
          <ul class="banner_content-list_block">
            <li class="banner_content-list_block-item">Task</li>
            <li class="banner_content-list_block-item">Higest</li>
            <li class="banner_content-list_block-item">Team Management</li>
            <li class="banner_content-list_block-item">DM #1 — Mad Devs Team</li>
          </ul>
        </div>
        <div class="banner_content-list_wrapper">
          <ul class="banner_content-list_block">
            <li class="banner_content-list_block-item">Status:</li>
            <li class="banner_content-list_block-item">Resolution:</li>
          </ul>
          <ul class="banner_content-list_block">
            <li class="banner_content-list_block-item">In Progress</li>
            <li class="banner_content-list_block-item">You Need This Team ;)</li>
          </ul>
        </div>
      </div>
      <h1>Работая с нами, у вас появится возможность <span>уделять больше времени на развитие вашего продукта</span> и поиск инвестиций</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
</style>
