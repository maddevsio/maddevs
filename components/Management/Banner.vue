<template>
  <section class="banner">
    <div class="banner_menu">
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item"></div>
      <div class="banner_menu-item banner_menu-item_auth">
        <userAvatar />
      </div>
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
            <li class="banner_content-list_block-item">
              <task />
              Task
            </li>
            <li class="banner_content-list_block-item">
              <jiraArrow />
              Higest
            </li>
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
            <li class="banner_content-list_block-item banner_content-list_block-item--status">In Progress</li>
            <li class="banner_content-list_block-item">You Need This Team ;)</li>
          </ul>
        </div>
      </div>
      <h1>Работая с нами, у вас появится возможность <span>уделять больше времени на развитие вашего продукта</span> и поиск инвестиций</h1>
    </div>
  </section>
</template>

<script>
import userAvatar from '@/components/svg/userAvatar';
import task from '@/components/svg/task';
import jiraArrow from '@/components/svg/jiraArrow';

export default {
  name: 'Banner',
  components: { userAvatar, task, jiraArrow }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .banner {
    display: flex;
    height: 610px;

    &_menu {
      width: 160px;
      min-width: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color:$bgcolor--brown;
      padding-top: 120px;

      &-item {
        width: 24px;
        height: 24px;
        border-radius: $default-border-radius;
        background-color: $white-016;
        margin-bottom: 15px;

        &:nth-child(3) {
          margin-top: auto;
        }

        &:last-child {
          width: auto;
          height: auto;
          border-radius: $border-radius-100;
          background-color: transparent;
          margin-bottom: 25px;
        }
      }
    }

    &_sidebar {
      min-width: 310px;
      display: flex;
      flex-direction: column;
      padding: 47px 30px 25px;
      box-sizing: border-box;
      background-color: $bgcolor--grey-dark;

      &-head {
        display: flex;
        align-items: center;

        &_img {
          width: 40px;
          min-width: 40px;
          height: 40px;
          background-color: $bgcolor--grey-light;
          border-radius: $default-border-radius;
          margin-right: 15px;
        }

        &_title {
          width: 100%;
          height: 10px;
          background-color: $bgcolor--grey-light;
          border-radius: $border-radius-10;
        }
      }

      &-list {
        margin-top: 25px;
        margin-left: 8px;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          color: $dark-04;
          line-height: 1.07;
          font-size: 14px;
          font-family: 'MADEEvolveSans-regular', sans-serif;

          &::before {
            content: '';
            width: 24px;
            min-width: 24px;
            height: 24px;
            min-height: 24px;
            display: block;
            background-color: $bgcolor--grey-light;
            border-radius: $border-radius-100;
            margin-right: 8px;
          }
        }
      }
    }

    &_content {
      padding: 59px 60px 25px 40px;

      &-task {
        width: 100%;
        color: $text-color--dark;
        font-family: 'MADEEvolveSans-regular', sans-serif;
        font-size: 12px;
        line-height: 1.25;
        margin-bottom: 35px;
      }

      &-list {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        &_wrapper {
          display: flex;
          margin-right: 70px;
        }

        &_block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;

          &:first-child {
            margin-right: 110px;
          }

          &-item {
            width: auto;
            display: flex;
            align-items: center;
            color: $text-color--dark;
            font-family: 'MADEEvolveSans-regular', sans-serif;
            font-size: 12px;
            line-height: 2.67;

            svg {
              min-width: 15px;
              margin-right: 10px;
            }

            &--status {
              background-color: $jira-inprogress;
              border-radius: $default-border-radius;
              color: $text-color--white;
              text-transform: uppercase;
              line-height: normal;
              letter-spacing: -0.1px;
              padding: 3px 8px;
              font-family: 'MADEEvolveSans-bold', sans-serif;
              margin-top: 5px;
              margin-bottom: 6px;
            }
          }
        }
      }

      h1 {
        margin-top: 50px;
        font-size: 49px;
        line-height: 1.22;
        font-weight: 300;
        font-family: 'MADEEvolveSans-light', sans-serif;

        span {
          font-family: 'MADEEvolveSans-medium', sans-serif;
          background-color: #fff6cd;
          padding: 0px 5px 5px;
          border-radius: 3px;
          border-radius: $default-border-radius;
        }
      }
    }
  }
</style>
