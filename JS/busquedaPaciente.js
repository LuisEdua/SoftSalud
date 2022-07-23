const conexion = require('../JS/conexion');


function busquedaPaciente(){
    var nombre_medi =  document.getElementById('input_ID').value;
    
    
    //INSTRUCCIONES DE sql
    $query=`SELECT * FROM pacientes WHERE id_paciente='${nombre_medi}';`;
        conexion.query($query, (err, rows)=>{
                if(!err){
                        var texto =`
                        Id Paciente :    ${rows[0].id_paciente}
                        Nombre :    ${rows[0].nombre_paciente}
                        Apellido :   ${rows[0].apellido_paciente}
                        Tipo Sangre :   ${rows[0].tipo_sangre}
                        Direccion :     ${rows[0].direccion}
                        Diagnostico:    ${rows[0].diagnostico}
                        Alergia:     ${rows[0].alergia}
                        Deporte:     ${rows[0].deporte}
                        Antecendentes familires:    ${rows[0].antecedente_familiar}
                        Intervenciones:     ${rows[0].intervencion}
                        Num Telefonico:     ${rows[0].numero_telefonico}
                        Medicacion:     ${rows[0].medicacion}
                        Pabellon:   ${rows[0].pabellon}
                        Numero cama:    ${rows[0].numero_cama}
                        `
                    alert("     PACIENTE ENCONTRADO  "+ texto)
                }
                else {console.log("error en el query");
                console.log(err);
                return;
            }
        })
    };