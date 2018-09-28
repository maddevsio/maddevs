<template>
  <section id="best-practices" class="best-practices">
    <div class="container">
        <div class="best-practices_wrap">
            <div class="best-practices_wrap-preview">
                <div class="best-practices_wrap-preview_header">
                    <div class="p-close"></div>
                    <div class="p-hide"></div>
                    <div class="p-full"></div>
                </div>
            </div>
            <div class="best-practices_wrap-title">
                <p>0 func (r *REST) addCommand (c echo.Context,) {</p>
                <div class="line-number_text">
                    <div id="line-number" class="line-number">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <h3 id="text">
                      {{ $t('We use the best') }} <span>{{ $t('development practices') }}</span> {{ $t('and we are responsible for') }} <span style="color: #a1d9ff;">{{ $t('the quality') }}</span> {{ $t('and') }} <span style="color: #e8b8ff;">{{ $t('stability') }}</span> {{ $t('of the product') }}.
                    </h3>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'best-practices',
  methods: {
    calcLineNumber() {
      let lineHeight = 38;
      function calcLine() {
        const text = document.getElementById('text');
        const lineCounts = parseInt(text.offsetHeight / lineHeight);
        const container = document.getElementById('line-number');
        container.innerHTML = '';

        for (var i = 1; i <= lineCounts; i++) {
          var elem = document.createElement('span');
          elem.innerHTML = i;
          container.appendChild(elem);
        }
      }
      window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
          lineHeight = 28;
          calcLine();
        } else {
          lineHeight = 38;
          calcLine();
        }
      });

      if (window.innerWidth <= 480) {
        lineHeight = 28;
        calcLine();
      }
      if (window.innerWidth > 1024) {
        lineHeight = 45;
        calcLine();
      } else {
        lineHeight = 38;
        calcLine();
      }
    }
  },
  mounted() {
    this.calcLineNumber();
  }
};
</script>
