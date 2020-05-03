<template>
  <ul class="icons-list">
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/ansible.svg" alt="Ansible">
      <span>Ansible</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/terraform.svg" alt="Terraform">
      <span>Terraform</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/cloudformation.svg" alt="CloudFormation">
      <span>CloudFormation</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/jenkins.svg" alt="Jenkins">
      <span>Jenkins</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/bamboo.svg" alt="Bamboo">
      <span>Bamboo</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/team-city.svg" alt="TeamCity">
      <span>TeamCity</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/travis.svg" alt="Travis CI">
      <span>Travis CI</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/aswcp.png" alt="AWS CodePipeline">
      <span>AWS CodePipeline</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/circle.svg" alt="Circle CI">
      <span>Circle CI</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/elk.svg" alt="ELK">
      <span>ELK</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/senrty.svg" alt="Sentry">
      <span>Sentry</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/prometheus.svg" alt="Prometheus">
      <span>Prometheus</span>
    </li>
    <li class="icon-item">
      <img src="../../assets/img/Technologies/svg/amazon-cloudwatch.svg" alt="Amazon CloudWatch">
      <span>Amazon CloudWatch</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InfrastructureSecondIconsGroup'
};
</script>

<style lang="scss" scoped>
  .icons-list {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 520px) {
    .icons-list {
      max-width: 325px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .icon-item {
      padding-right: 0;
      &:nth-child(3) {
        grid-column-start: 2;
        grid-row-start: 2;
      }

      &:nth-child(6) {
        grid-column-start: 1;
        grid-row-start: 3;
      }

      &:nth-child(7) {
        grid-column-start: 1;
        grid-row-start: 4;
      }

      &:nth-child(8) {
        grid-row-start: 3;
      }

      &:nth-child(9) {
        grid-row-start: 6;
      }

      &:nth-child(10) {
        grid-column-start: 2;
        grid-row-start: 6;
      }

      &:nth-child(11) {
        grid-row-start: 5;
      }

      &:nth-child(12) {
        grid-column-start: 2;
        grid-row-start: 5;
      }

      &:nth-child(13) {
        grid-column-start: 2;
        grid-row-start: 4;
      }
    }
  }
</style>
