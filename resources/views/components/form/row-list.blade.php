@foreach($rows as $row)
    @component('components.form.row', array_merge($row, ['data' => $data ?? null]))
    @endcomponent
@endforeach