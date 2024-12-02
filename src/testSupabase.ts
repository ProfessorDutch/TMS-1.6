import supabase from '@supabase/supabaseClient';

async function testConnection() {
  const { data, error } = await supabase.from('ambassadors').select('*');

  if (error) {
    console.error('Error fetching ambassadors:', error);
  } else {
    console.log('Ambassadors:', data);
  }
}

testConnection();
