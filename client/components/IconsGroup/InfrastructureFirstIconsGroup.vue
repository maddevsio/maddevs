<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item aws">
        <TechIcon class-prefix="asw" title="ASW"/>
      </div>
      <div class="icon-item digital-ocean">
        <TechIcon class-prefix="digital-ocean" title="Digital Ocean"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item heroku">
        <TechIcon class-prefix="heroku" title="Heroku"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="azure" title="Azure"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'InfrastructureFirstIconsGroup',
  components: {
    TechIcon
  }
};
</script>
