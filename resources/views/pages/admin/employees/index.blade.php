@extends('layouts.app')

@section('title'){{ 'Admin|Employees' }}@stop

@section('content')
    <sidebar></sidebar>
    <div class="main-content">
       <div class="container-fluid">
           <employees-data-table></employees-data-table>
       </div>
    </div> 
@endsection