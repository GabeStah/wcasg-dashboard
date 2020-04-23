<mjml>
    <mj-head>
        <mj-title>Welcome to WCASG!</mj-title>
        <mj-preview>Welcome to WCASG!</mj-preview>
        <mj-attributes>
            <mj-all font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-all>
            <mj-text font-weight="400" font-size="16px" color="#000000" line-height="24px" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-text>
        </mj-attributes>
        <mj-style inline="inline">
            .body-section {
            -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
            box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
            }
        </mj-style>
        <mj-style inline="inline">
            .text-link {
            color: #5e6ebf
            }
        </mj-style>
        <mj-style inline="inline">
            .footer-link {
            color: #888888
            }
        </mj-style>

    </mj-head>
    <mj-body background-color="#E7E7E7" width="1200px">
        <mj-section full-width="full-width" background-color="#040B4F" padding-bottom="0">
            <mj-column width="100%">
                <mj-image src="{{ config('app.url') . '/img/wcasg_acronym_light-sm.png' }}" alt="" align="center" width="150px" />
                <mj-text color="#fff" align="center" font-size="18px" padding-top="0" font-weight="bold" text-transform="uppercase" letter-spacing="1px" line-height="30px">
                    Subscription Confirmation
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

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px" padding-top="0">
                <mj-column width="100%">
                    <mj-text color="#212b35" font-size="14px" padding-top="0" padding-bottom="0">
                        Hello {{ $user->first_name }}, <br />
                        Here are the details for your recent purchase. You may login to the <a href="{{ route('account.index') }}">user dashboard</a> to begin the installation of your services. If you have any questions or concerns please reach out to us at <a href="mailto:{{ config('mail.support.address') }}">{{ config('mail.support.address') }}</a> or fill out a <a href="{{ route('ticket.index') }}">support ticket</a>.
                    </mj-text>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
                <mj-column width="100%">
                    <mj-divider border-color="#DFE3E8" border-width="1px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="20px">
                        Order Information
                    </mj-text>
                </mj-column>

                <mj-column width="50%">
                    <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
                        Customer Information:<br />
                        {{ $user->name }}<br />
                        {{ $user->company_name }}<br />
                        {{ $user->address1 }}<br />
                        {{ $user->address2 }}<br />
                        {{ $user->city }}, {{ $user->state }} {{ $user->postal_code }}
                    </mj-text>

                </mj-column>
                <mj-column width="50%">
                    <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
                        Plan: {{ $plan->nickname }}<br />
                        Order Number: {{ $subscription->id }}<br />
                        Order Date: {{ \Carbon\Carbon::parse($subscription->created_at) }}<br />
                        @if(isset($coupon))
                            Discount: {{ $coupon }}<br />
                        @endif
                        Total: ${{ cents_to_decimal($plan->amount) }}<br />
                        Term: {{ $plan->interval }}
                    </mj-text>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
                <mj-column width="100%">
                    <mj-divider border-color="#DFE3E8" border-width="1px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="20px">
                        Payment Information
                    </mj-text>
                </mj-column>

                <mj-column width="100%">
                    <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
                        Payment Method: {{ $payment_method->type }}<br />
                        @if($payment_method->type === 'card')
                            Card Type: {{ $payment_method->card->brand }}<br />
                            Card Ending {{ $payment_method->card->last4 }}<br />
                        @endif
                    </mj-text>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding="0 15px 0 15px">
                <mj-column width="100%">
                    <mj-button background-color="#167ff7" align="center" color="#ffffff" font-size="17px" font-weight="bold" href="{{ route('account.sites.index') }}" width="300px">
                        Install Compliance Widget
                    </mj-button>
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