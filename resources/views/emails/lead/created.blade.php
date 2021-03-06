<mjml>
    <mj-head>
        <mj-title>Website Audit Report for {{ $lead['url'] }}</mj-title>
        <mj-preview>Website Audit Report for {{ $lead['url'] }}</mj-preview>
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
                <mj-image src="https://dashboard.widget.wcasg.solarix.dev/img/wcasg_acronym_light-sm.png" alt="" align="center" width="150px" />
                <mj-text color="#ffffff" font-weight="bold" align="center" text-transform="uppercase" font-size="16px" letter-spacing="1px" padding-top="30px">
                    <a href="{{ $lead['url'] }}" style="color:#ffffff;text-decoration:none;" target="_blank">{{ $lead['url'] }}</a>
                </mj-text>
                <mj-text color="#17CBC4" align="center" font-size="24px" padding-top="0" font-weight="bold" text-transform="uppercase" letter-spacing="1px" line-height="20px">
                    Website Audit Report
                </mj-text>
            </mj-column>
        </mj-section>
        <mj-wrapper padding-top="0" padding-bottom="0" css-class="body-section">

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px" padding-top="0">
                <mj-column width="100%">
                    <mj-spacer height="20px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="30px">
                        Audit Stats
                    </mj-text>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding-top="0">
                <mj-column width="33%">
                    <mj-button font-family="Helvetica" background-color="#fff" border="1px solid rgb(0,0,0,0.2)" border-bottom="4px solid rgb(173, 29, 0, .6)" color="#ad1d00" font-size="18px" border-radius="16px">
                        {{ $stats->errors }} Errors
                    </mj-button>
                </mj-column>
                <mj-column width="33%">

                    <mj-button font-family="Helvetica" background-color="#fff" border="1px solid rgb(0,0,0,0.2)" border-bottom="4px solid rgb(163, 157, 0, .6)" color="#a39d00" font-size="18px" border-radius="16px">
                        {{ $stats->warnings }} Warnings
                    </mj-button>
                </mj-column>
                <mj-column width="33%">

                    <mj-button font-family="Helvetica" background-color="#fff" border="1px solid rgb(0,0,0,0.2)" border-bottom="4px solid rgb(0, 173, 49, .6)" color="#00ad31" font-size="18px" border-radius="16px">
                        {{ $stats->notices }} Notices
                    </mj-button>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
                <mj-column width="100%">
                    <mj-divider border-color="#DFE3E8" border-width="1px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="30px">
                        Lead Info
                    </mj-text>
                </mj-column>

                @foreach($lead as $key => $value)

                <mj-column width="20%">
                    <mj-text color="#637381" font-size="14px" text-transform="uppercase" font-weight="bold" padding-top="0" padding-bottom="0">
                        {{ $key }}
                    </mj-text>
                </mj-column>
                <mj-column width="80%">
                    <mj-text color="#212b35" font-size="14px" padding-top="0" padding-bottom="0">
                        {{ $value }}
                    </mj-text>
                </mj-column>

                @endforeach

            </mj-section>

            <mj-section background-color="#ffffff" padding="0 15px 0 15px">
                <mj-column width="100%">
                    <mj-divider border-color="#DFE3E8" border-width="1px" />
                    <mj-text color="#212b35" font-weight="bold" font-size="30px">
                        Audit Results
                    </mj-text>
                    <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
                        Results are based on the <a href="{{ $audit->standard['url'] }}" style="text-decoration:none;" target="_blank">{{ $audit->standard['name'] }} Standard</a>.
                    </mj-text>
                </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff" padding="0 15px 0 15px">
                <mj-column width="10%">
                    <mj-text font-weight="bold">
                        Type
                    </mj-text>
                </mj-column>
                <mj-column width="20%">
                    <mj-text font-weight="bold">
                        Code
                    </mj-text>
                </mj-column>
                <mj-column width="40%">
                    <mj-text font-weight="bold">
                        Message
                    </mj-text>
                </mj-column>
                <mj-column width="30%">
                    <mj-text font-weight="bold">
                        Selector
                    </mj-text>
                </mj-column>
            </mj-section>

            @foreach($results as $result)

                <mj-section background-color="#ffffff" padding="0 15px 0 15px">
                    <mj-column width="10%">
                        <mj-text font-size="12px">
                            {{ $result->type ?? '' }}
                        </mj-text>
                    </mj-column>
                    <mj-column width="20%">
                        <mj-text font-size="12px">
                            {{ $result->code ?? preg_split('/\./', $result->code).join(' ') }}
                        </mj-text>
                    </mj-column>
                    <mj-column width="40%">
                        <mj-text font-size="12px">
                            {{ $result->message ?? '' }}
                        </mj-text>
                    </mj-column>
                    <mj-column width="30%">
                        <mj-text font-size="12px">
                            {{ $result->selector ?? '' }}
                        </mj-text>
                    </mj-column>
                </mj-section>

                @if($loop->iteration === $max_results)
                    @break
                @endif
            @endforeach

            <mj-section background-color="#ffffff" padding="0 15px 0 15px">
                <mj-column width="100%">
                    <mj-button background-color="#167ff7" align="center" color="#ffffff" font-size="17px" font-weight="bold" href="{{ config('app.url') . 'audit/' . $audit->id }}" width="400px">
                        @if(count($results) > $max_results)
                            Click to View the {{ count($results) - $max_results }} Remaining Results
                        @else
                            Click to View the Public Results URL
                        @endif
                    </mj-button>
                </mj-column>
            </mj-section>
        </mj-wrapper>

        @include('emails.components.footer')
    </mj-body>
</mjml>