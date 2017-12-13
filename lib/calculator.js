$( ".unit-conversion-length" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');
    switch(itemId){
        case 'unit_length_metre':
            $('#unit_length_inch').val((itemVal * 39.3700787).toFixed(2));
            $('#unit_length_foot').val((itemVal * 3.2808399).toFixed(2));
            break;
        case 'unit_length_inch':
            $('#unit_length_metre').val((itemVal * 0.0254).toFixed(2));
            $('#unit_length_foot').val((itemVal / 12).toFixed(2));
            break;
        default: //unit_length_foot
            $('#unit_length_inch').val((itemVal * 12).toFixed(2));
            $('#unit_length_metre').val((itemVal * 0.3048).toFixed(2));
            break;
    }
});

$( ".unit-conversion-weight" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');
    switch(itemId){
        case 'unit_weight_kg':
            $('#unit_weight_pound').val((itemVal * 2.20462262).toFixed(2));
            $('#unit_weight_ounce').val((itemVal * 35.2739619).toFixed(2));
            break;
        case 'unit_weight_pound':
            $('#unit_weight_kg').val((itemVal * 0.45359237).toFixed(2));
            $('#unit_weight_ounce').val((itemVal * 16).toFixed(2));
            break;
        default: //unit_length_ounce
            $('#unit_weight_kg').val((itemVal * 0.0283495231).toFixed(2));
            $('#unit_weight_pound').val((itemVal / 16).toFixed(2));
            break;
    }
});

$( ".unit-conversion-pressure" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');
    switch(itemId){
        case 'unit_pressure_mpa':
            $('#unit_pressure_bar').val((itemVal * 10).toFixed(0));
            $('#unit_pressure_psi').val((itemVal * 145.037738).toFixed(2));
            break;
        case 'unit_pressure_bar':
            $('#unit_pressure_psi').val((itemVal * 14.5037738).toFixed(2));
            $('#unit_pressure_mpa').val((itemVal * 0.1).toFixed(2));
            break;
        default: //unit_pressure_psi
            $('#unit_pressure_mpa').val((itemVal * 0.00689475729).toFixed(5));
            $('#unit_pressure_bar').val((itemVal * 0.0689475729).toFixed(4));
            break;
    }
});

$( ".unit-conversion-temperature" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');
    switch(itemId) {
        case 'unit_temperature_c':
            $('#unit_temperature_f').val((itemVal * 1.8 + 32).toFixed(2));
            $('#unit_temperature_k').val((itemVal * 1 + 273.15).toFixed(2));
            break;
        case 'unit_temperature_f':
            $('#unit_temperature_c').val(((itemVal - 32) / 1.8).toFixed(2));
            $('#unit_temperature_k').val(((itemVal - 32) / 1.8 + 273.15).toFixed(2));
            break;
        default: //unit_temperature_k
            $('#unit_temperature_c').val((itemVal - 273.15).toFixed(2));
            $('#unit_temperature_f').val(((itemVal -  273.15) * 1.8 + 32).toFixed(2));
            break;
    }
});

$( ".unit-conversion-volume" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');
    switch(itemId) {
        case 'unit_volume_lite':
            $('#unit_volume_ukgallon').val((itemVal * 0.219969157).toFixed(2));
            $('#unit_volume_ukpint').val((itemVal * 1.75975326).toFixed(2));
            $('#unit_volume_usgallon').val((itemVal * 0.264172052).toFixed(2));
            $('#unit_volume_uspint').val((itemVal * 2.11337642).toFixed(2));
            $('#unit_volume_usquart').val((itemVal * 1.05668821).toFixed(2));
            break;
        case 'unit_volume_ukgallon':
            $('#unit_volume_lite').val((itemVal * 4.54609188).toFixed(2));
            $('#unit_volume_ukpint').val((itemVal * 8).toFixed(2));
            $('#unit_volume_usgallon').val((itemVal * 1.20095042).toFixed(2));
            $('#unit_volume_uspint').val((itemVal * 9.60760338).toFixed(2));
            $('#unit_volume_usquart').val((itemVal * 4.80380169).toFixed(2));
            break;
        case 'unit_volume_ukpint':
            $('#unit_volume_lite').val((itemVal * 0.568261485).toFixed(2));
            $('#unit_volume_ukgallon').val((itemVal * 0.125).toFixed(2));
            $('#unit_volume_usgallon').val((itemVal * 0.150118803).toFixed(2));
            $('#unit_volume_uspint').val((itemVal * 1.20095042).toFixed(2));
            $('#unit_volume_usquart').val((itemVal * 0.600475211).toFixed(2));
            break;
        case 'unit_volume_usgallon':
            $('#unit_volume_lite').val((itemVal * 3.78541178).toFixed(2));
            $('#unit_volume_ukgallon').val((itemVal * 0.83267384).toFixed(2));
            $('#unit_volume_ukpint').val((itemVal * 6.66139072).toFixed(2));
            $('#unit_volume_uspint').val((itemVal * 8).toFixed(2));
            $('#unit_volume_usquart').val((itemVal * 4).toFixed(2));
            break;
        case 'unit_volume_uspint':
            $('#unit_volume_lite').val((itemVal * 0.473176473).toFixed(2));
            $('#unit_volume_ukgallon').val((itemVal * 0.10408423).toFixed(2));
            $('#unit_volume_ukpint').val((itemVal * 0.83267384).toFixed(2));
            $('#unit_volume_usgallon').val((itemVal * 0.125).toFixed(2));
            $('#unit_volume_usquart').val((itemVal * 0.5).toFixed(2));
            break;
        default: //unit_volume_usquart
            $('#unit_volume_lite').val((itemVal * 0.946352946).toFixed(2));
            $('#unit_volume_ukgallon').val((itemVal * 0.20816846).toFixed(2));
            $('#unit_volume_ukpint').val((itemVal * 1.66534768).toFixed(2));
            $('#unit_volume_usgallon').val((itemVal * 0.25).toFixed(2));
            $('#unit_volume_uspint').val((itemVal * 2).toFixed(2));
            break;
    }
});

$( ".sg_plato_alcohol" ).on('input', function() {
    itemVal = $(this).val();
    itemId = $(this).attr('id');

    switch(itemId)
    {
        case 'original_gravity':
            $('#original_plato').val(sg2plato(itemVal).toFixed(2));
            break;
        case 'final_gravity':
            $('#final_plato').val(sg2plato(itemVal).toFixed(2));
            break;
        case 'original_plato':
            $('#original_gravity').val(plato2sg(itemVal).toFixed(5));
            break;
        default : //'final_plato':
            $('#final_gravity').val(plato2sg(itemVal).toFixed(5));
            break;
    }
});














// Specific Gravity to Plato Formula
function sg2plato (sg)
{
    return ((-1 * 616.868) + (1111.14 * sg) - (630.272 * Math.pow(sg,2)) + (135.997 * Math.pow(sg, 3)));
}

// Plato to Specific Gravity Formula
function plato2sg (plato)
{
    return (1 + (plato / (258.6 - ( (plato / 258.2) * 227.1) )));
}

// test
console.log('test');