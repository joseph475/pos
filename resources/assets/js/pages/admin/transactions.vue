<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header clearfix">
                        <div class="form-inline float-left">
                            <div class="form-group pt-0 mr-2">
                                <input style="width:250px; margin-top: 0.4rem;" type="text" id="searchItemsField" class="form-control" placeholder="Search Transactions">
                            </div>
                            <div class="form-group pt-0 mr-2">
                                <v-select v-model="selected" placeholder="Filter by Category" label="label" :options="options"></v-select>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-info btn-raised mb-0">
                                    <i class="fas fa-search"></i>
                                    Search
                                </button>

                            </div>
                        </div>

                        <div class="form-inline float-right">
                            <!-- <div class="form-group mr-1">
                                <button class="btn btn-primary btn-raised mb-0">
                                    <i class="fas fa-plus-circle"></i> New Item
                                </button>
                            </div> -->
                            <div class="form-group">

                                <button type="button" class="btn btn-secondary btn-outline dropdown-toggle mb-0" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span class="sr-only">Toggle Dropdown</span>
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <div class="dropdown-menu" style="top">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card body">
                        <transactions-data-table></transactions-data-table>
                    </div>
                    <div class="card-footer">
                        <pagination></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TransactionsDataTable from '../../../components/admin/dashboard/transactionsDataTable';
    import Pagination from '../../../components/pagination';

    export default {
        components: {
            TransactionsDataTable,
            Pagination
        },
        data() {
            return {
                selected: { label: 'All', value: null },
                options: [
                    {
                        label: 'All',
                        value: null
                    },
                    {
                        label: 'Item Id',
                        value: 'item_id'
                    },
                    {
                        label: 'Item Name',
                        value: 'item_name'
                    },
                    {
                        label: 'Quantity',
                        value: 'quantity'
                    },

                ]
            }
        }
    }
</script>

<style>
    .v-select.searchable .dropdown-toggle {
        border-top: none;
        border-left: none;
        border-right: none;
    }
</style>