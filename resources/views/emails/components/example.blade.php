<mjml>

    @include('emails.components.head')

    <mj-body background-color="#E7E7E7" width="1200px">
        <mj-section full-width="full-width" background-color="#040B4F" padding-bottom="0">
            <mj-column width="100%">
                <mj-image src="{{ config('app.url') . '/img/wcasg_acronym_light-sm.png' }}" alt="" align="center" width="150px" />
                <mj-text color="#fff" align="center" font-size="18px" padding-top="0" font-weight="bold" text-transform="uppercase" letter-spacing="1px" line-height="30px">
                    {{ isset($data->title) ? $data->title : 'Default Title' }}
                </mj-text>
            </mj-column>
        </mj-section>
        <mj-wrapper padding-top="0" padding-bottom="0" css-class="body-section">

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px" padding-top="0">
                <mj-column width="100%">
                    <mj-spacer height="30px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="30px">
                        Thank you for your order!
                    </mj-text>
                </mj-column>
            </mj-section>

        </mj-wrapper>

        <mj-wrapper full-width="full-width">
            <mj-section>
                <mj-column width="100%" padding="0">
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
                    <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
                        You are receiving this email because you have agreed to receive emails from WCASG regarding new features, events, and special offers.
                    </mj-text>
                    <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
                        &copy; WCASG 2020, All Rights Reserved.
                    </mj-text>
                </mj-column>
            </mj-section>
            <mj-section padding-top="0">
                <mj-group>
                    <mj-column width="100%" padding-right="0">
                        <mj-text color="#445566" font-size="11px" align="center" line-height="16px" font-weight="bold">
                            <a class="footer-link" href="#">Privacy</a>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<a class="footer-link" href="#">Unsubscribe</a>
                        </mj-text>
                    </mj-column>
                </mj-group>
            </mj-section>
        </mj-wrapper>
    </mj-body>
</mjml>