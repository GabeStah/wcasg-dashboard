<!-- @component('mail::message')
# Team Updated

Team details have been updated.

You can login to see changes.

@component('mail::button', ['url' => route('account.index')])
View my account
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent -->


<mjml background-color="#dbe5ea">
  <mj-head>
    <mj-attributes>
      <mj-text padding="0" />
      <mj-class name="blue" color="blue" />
      <mj-class name="big" font-size="20px" />
      <mj-all font-family="Helvetica" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#dbe5ea">
    <!-- Top Spacer -->
    <mj-section full-width="full-width">
      <mj-column width="100%" vertical-align="middle">
        <mj-text color="#888" align="left" font-size="11px" padding-bottom="0px" padding-top="0"><span style="font-size: 11px"></span></mj-text>
      </mj-column>
    </mj-section>

    <!-- Header -->
    <mj-section background-color="white" padding="16px 8px 16px 8px" border-radius="4px 4px 0px 0px">
      <mj-column width="100%">
        <mj-image width="150px" src="http://178.128.7.36/img/logo-sm.png"></mj-image>
      </mj-column>
    </mj-section>

    <!-- Hero -->
    <mj-section background-color="#126de5" padding="16px 8px 16px 8px">
      <mj-column width="100%" vertical-align="middle" padding="32px 12px">
        <mj-text align="center" font-size="30px" line-height="36px" padding-bottom="12px" color="#fff" font-weight="bold">Team Updated</mj-text>
        <mj-text align="center" font-size="19px" line-height="28px" color="#EEE">Team details have been updated.</mj-text>
      </mj-column>
    </mj-section>

    <!-- Content Area -->
    <mj-section background-color="#fff" padding="16px 24px 16px 24px">
      <mj-column width="100%" vertical-align="middle" padding="32px 12px 0px">
        <mj-text align="center" font-size="18px" line-height="24px" padding-bottom="8px" color="#242b3d" font-weight="bold">You can login to see changes.</mj-text>

        <mj-text align="center" font-size="16px" line-height="24px" color="#424651">
          @component('mail::button', ['url' => route('account.index')])
          View my account
          @endcomponent
        </mj-text>
        <mj-text align="center" font-size="16px" line-height="24px" color="#424651"> Thanks,<br>
          {{ config('app.name') }}</mj-text>
      </mj-column>
    </mj-section>


    <mj-wrapper full-width="full-width">
      <mj-section>
        <mj-column width="100%" padding="24px 0">
          <mj-social font-size="15px" icon-size="30px" mode="horizontal" padding="0" align="center">
            <mj-social-element name="facebook" href="#" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="google" href="#" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="twitter" href="#" background-color="#A1A0A0">
            </mj-social-element>
            <mj-social-element name="linkedin" href="#" background-color="#A1A0A0">
            </mj-social-element>
          </mj-social>
          <mj-text color="#445566" font-size="11px" align="center" line-height="16px" padding="16px 0">
            You are receiving this email because you have agreed to receive emails from WCASG regarding your account, purchases, new features, events, and special offers.
          </mj-text>
          <mj-text color="#445566" font-size="11px" align="center" line-height="16px" font-weight="bold">
            <a class="footer-link" href="#">Privacy</a> | <a class="footer-link" href="#">Unsubscribe</a> | <a class="footer-link" href="#">Support</a>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section padding-top="0">
        <mj-group>
          <mj-column width="100%" padding-right="0">
            <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
              &copy; WCASG 2020, All Rights Reserved.
            </mj-text>
          </mj-column>
        </mj-group>
      </mj-section>
    </mj-wrapper>
  </mj-body>
</mjml>