<template>
    <div>
        <no-ssr>
        <header class="module-header">
                <div class="title" id="certs_title">
                        {{metadata.certificates}}
                </div>
        </header>
            <header>
                <div class="cert_heading">
                    {{metadata.certificatesHeadingParagraph}}
                </div>
            </header>
        <div id="certificateNav">
            <nav class="certificate-nav">    
                <div class="us2_eu_toggle">
                    <a id="us2-cert-nav-menu" class="certificate-data-centers-active" @click="toggleUs2CertTables();">US2 Data Center</a>
                    <a id="eu-cert-nav-menu" @click="toggleEuCertTables();">EU Data Center</a>
                </div>
            </nav>
        </div>
        <div id="us2-cert-tables" class="panel certificates container">
            <div class="panel-content">
                <table class="client_instance_cert">
                    <caption>
                        {{metadata.certificatesBlacklineCom}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">US2</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComExpirationDateProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComExpirationDateSandbox"></td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComStrengthProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineComStrengthSandbox"></td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\wild-us2-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\wild-sbus2-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="panel-content">
                <table class="certificate-table">
                    <caption id="sso_caption">
                        {{metadata.certificatesSso}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">US2</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2SsoSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2SsoSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2SsoExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2SsoExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2SsoStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2SsoStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\ssous2-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\sbssous2-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="panel-content">
                <table class="certificate-table">
                    <caption>
                        {{metadata.certificatesBlacklineOnDemandSso}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">US2</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineOnDemandSsoSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2BlacklineOnDemandSsoSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2BlacklineOnDemandSsoExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2BlacklineOnDemandSsoExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2BlacklineOnDemandSsoStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2BlacklineOnDemandSsoStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\blacklineondemandssous2-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\blacklineondemandssosbus2-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="panel-content">
                <table class="certificate-table">
                    <caption>
                        {{metadata.certificatesDataRelay2WaySsl}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">US2</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2DataRelay2WaySslSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesUS2DataRelay2WaySslSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2DataRelay2WaySslExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2DataRelay2WaySslExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesUS2DataRelay2WaySslStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesUS2DataRelay2WaySslStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\datarelay-us2-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\datarelay-sbus2-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="eu-cert-tables" class="panel certificates container">
            <div class="panel-content">
                <table class="certificate-table">
                    <caption>
                        {{metadata.certificatesBlacklineCom}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">EU</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesEUBlacklineComSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesEUBlacklineComSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesEUBlacklineComExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUBlacklineComExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesEUBlacklineComStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUBlacklineComStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\wild-eu1-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\wild-sbeu1-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="panel-content">
                <table class="certificate-table">
                    <caption>
                        {{metadata.certificatesSso}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">EU</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesEUSsoSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesEUSsoSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesEUSsoExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUSsoExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesEUSsoStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUSsoStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\ssoeu-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\ssosbeu-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="panel-content">
                <table class="certificate-table">
                    <caption>
                            {{metadata.certificatesDataRelay2WaySsl}}
                    </caption>
                    <tr>
                        <th id= "US2_header" class="certificate-cells-colhead-vertical" scope="col">EU</th>
                        <th id="production_header" class="certificate-cells-colhead-vertical" scope="col">Production</th>
                        <th id="sandbox_header" class="certificate-cells-colhead-vertical" scope="col">Sandbox</th>
                    </tr>
                    <tr>
                        <th id="subject_header" class="certificate-cells-colhead-horizontal" scope="row">Subject</th>
                        <td class="certificate-cells" v-html="metadata.certificatesEUDataRelay2WaySslSubjectProd"></td>
                        <td class="certificate-cells" v-html="metadata.certificatesEUDataRelay2WaySslSubjectSandbox"></td>
                    </tr>
                    <tr id="expire_date">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Expiration date</th>
                        <td class="certificate-cells">{{metadata.certificatesEUDataRelay2WaySslExpirationDateProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUDataRelay2WaySslExpirationDateSandbox}}</td>
                    </tr>
                    <tr>
                        <th class="certificate-cells-colhead-horizontal" scope="row">Strength (key length)</th>
                        <td class="certificate-cells">{{metadata.certificatesEUDataRelay2WaySslStrengthProd}}</td>
                        <td class="certificate-cells">{{metadata.certificatesEUDataRelay2WaySslStrengthSandbox}}</td>
                    </tr>
                    <tr id="cert_download">
                        <th class="certificate-cells-colhead-horizontal" scope="row">Certificate download link</th>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\datarelay-eu1-blackline-com.crt">Certificate</a></td>
                        <td class="certificate-cells"><a href="..\..\..\..\cert-public-key\datarelay-sbeu1-blackline-com.crt">Certificate</a></td>
                    </tr>
                </table>
            </div>
        </div>
        </no-ssr>
    </div>
</template>

<script>
import axios from 'axios'
import metadata from '~/app/metadata/resource/en-US/resource.json'

export default {
  head() {
    return {
      title: 'Trust - Certificates' || '',
      meta: [
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ]
    }
  },
  asyncData ({ params }) {
      return {metadata}
  },
  components: {
  },
  methods: {
    toggleUs2CertTables: function () {
      var us2NavMenu = document.getElementById("us2-cert-nav-menu");
      var euNavMenu = document.getElementById("eu-cert-nav-menu");
      euNavMenu.style.backgroundColor = "transparent";
      euNavMenu.style.color = "#444444" ;
      us2NavMenu.style.backgroundColor = "#037bc0";
      us2NavMenu.style.color = "White";

      var certificateTablesUs2 = document.getElementById("us2-cert-tables");
      var certificateTablesEu = document.getElementById("eu-cert-tables");
        if (certificateTablesUs2.style.display != "table") {
            certificateTablesUs2.style.display = "table";
            certificateTablesEu.style.display = "none";
        }
    },

    toggleEuCertTables: function () {
      var us2NavMenu = document.getElementById("us2-cert-nav-menu");
      var euNavMenu = document.getElementById("eu-cert-nav-menu");
      us2NavMenu.style.backgroundColor = "transparent";
      us2NavMenu.style.color = "#444444";
      euNavMenu.style.backgroundColor = "#037bc0";
      euNavMenu.style.color = "White";

      var certificateTablesEu = document.getElementById("eu-cert-tables");
      var certificateTablesUs2 = document.getElementById("us2-cert-tables");
      if (certificateTablesEu.style.display != "table") {
        certificateTablesEu.style.display = "table";
        certificateTablesUs2.style.display = "none";
      }
    }
  }
}

</script>

<style scoped src="@/assets/css/certificates.css">

</style>
