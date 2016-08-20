var dictionary = {
	plain: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!;:\'"{}[]\\/<>$%^&*()',
	amazing: [
		'65345',
		'65346',
		'65347',
		'65348',
		'65349',
		'65350',
		'65351',
		'65352',
		'65353',
		'65354',
		'65355',
		'65356',
		'65357',
		'65358',
		'65359',
		'65360',
		'65361',
		'65362',
		'65363',
		'65364',
		'65365',
		'65366',
		'65367',
		'65368',
		'65369',
		'65370',
		'65313',
		'65314',
		'65315',
		'65316',
		'65317',
		'65318',
		'65319',
		'65320',
		'65321',
		'65322',
		'65323',
		'65324',
		'65325',
		'65326',
		'65327',
		'65328',
		'65329',
		'65330',
		'65331',
		'65332',
		'65333',
		'65334',
		'65335',
		'65336',
		'65337',
		'65338',
		'46',
		'44',
		'65311',
		'65281',
		'65307',
		'65306',
		'65287',
		'quot',
		'65371',
		'65373',
		'91',
		'93',
		'65340',
		'65295',
		'65308',
		'65310',
		'65284',
		'65285',
		'65342',
		'65286',
		'65290',
		'65288',
		'65289'
	]
}

$(document).ready(function(){
	$('input').focus().on('change paste keyup click', function(){
		var str = $(this).val();

		if (str) {
			var len = str.length, newstr = '';
			for (var i = 0; i < len; i++) {
				var char = str[i];
				if (char != ' ') {
					var newchar = dictionary.amazing[dictionary.plain.indexOf(char)];
					if (newchar != 'quot')
						newstr += '&#' + newchar + ';';
					else
						newstr += '&quot';
				} else
					newstr += ' ';
			}
			$('p').html(newstr);
		} else
			$('p').empty();
	});
})