@extends('layouts.app')

@section('title'){{ 'Items|Create' }}@stop

@section('content')
    <div class="main-content">
        <div class="container-fluid">
            <item-form></item-form>
        </div>
    </div>
@endsection