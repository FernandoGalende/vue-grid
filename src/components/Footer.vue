
  <template>
    <div class="footer">    
        <span>
            E. <a id="mailto" href="mailto:fernandogalende@gmail.com" target="_newtab" >fernandogalende@gmail.com</a>
        </span>
        <span>
            <a href="https://www.linkedin.com/in/fernandogalende/" target="_blank">
                Lindedin
            </a>
        </span>
        <span>
            <a href="https://github.com/FernandoGalende" target="_blank">
                Github
            </a>
        </span>    
        <span>
            T. (+34) 635 538 974
        </span>
  </div>
</template>

<script>
    export default {
        name: "footerApp",
    };
</script>

<style lang="scss">
    @import "../theme/_partials.scss";
    
    .footer {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        a, span {
            font-size: 10px;
        }
        @include mobile {        
           flex-direction: column;
           a, span {
            padding: 5px 0px;
        }

        }
    }
</style>
