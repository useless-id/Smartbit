<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveCityToTechnicalSupports extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('technical_supports', function (Blueprint $table) {
            //
            $table->dropColumn('citta');
            $table->string('telefono', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('technical_supports', function (Blueprint $table) {
            //
            
        });
    }
}
