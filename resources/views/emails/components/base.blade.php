<mjml background-color="#dbe5ea">

    @include('emails.components.head')

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
                <mj-image width="150px" src="{{ app_logo_path() }}"></mj-image>
            </mj-column>
        </mj-section>

        <!-- Hero -->
        @include('emails.components.hero')

        <!-- Content -->
        <mj-section background-color="#fff" padding="16px 24px 16px 24px">
            @yield('content')
        </mj-section>

        <!-- Footer -->
        @include('emails.components.footer')
    </mj-body>
</mjml>