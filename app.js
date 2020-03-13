const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'kevin',
    password: '0000',
    database: 'service'
});

koneksi.connect((err) => {
    if(err) throw err;
    console.log("CONNECTION TO DB SERVICE HAS BEEN ESTABLISHED!");
});

app.listen(port, () => {
    console.log(`DINARTECHSHARE-E BACKEND SERVER STARTED, RUNNING ON PORT: ${port}`);
});

app.get('/',(req, res) => {
    res.send("DINARTECHSHARE-E BACKEND SERVER!");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              tabel customer

//tampilkan semua data customer
app.get('/api/service/customer',(req, res) => {
    let sql = "SELECT * FROM customer";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data customer berdasarkan id
app.get('/api/service/customer/:id',(req, res) => {
    let sql = "SELECT * FROM customer WHERE customer_id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan customer baru
app.post('/api/service/customer',(req, res) => {
    let data = {
        nama: req.body.customer_nama, 
        alamat: req.body.customer_alamat,
        cp: req.body.customer_cp
    };
    let sql = "INSERT INTO customer SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update customer 
app.put('/api/service/customer/:id',(req, res) => {
    let sql = "UPDATE customer SET nama='"+req.body.customer_nama+"', alamat='"+req.body.customer_alamat+"', cp='"+req.body.customer_cp+"' WHERE customer_id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete Customer
app.delete('/api/service/customer/:id',(req, res) => {
    let sql = "DELETE FROM customer WHERE customer_id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin_history


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel poin


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel retur


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel service


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel status


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel take


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//kevinnnnnnn

// tabel team
//tampilkan semua data team
app.get('/api/service/team',(req, res) => {
    let sql = "SELECT * FROM team";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json(({
            "status": 200, 
            "error": null,
            "response": results
        }));
    });
});

//tampilkan data team berdasarkan id
app.get('/api/service/team/:id',(req, res) => {
    let sql = "SELECT * FROM team WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json(({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});


//tambahkan team baru
app.post('/api/service/team',(req, res) => {
    let data = {
        id_teknisi: req.body.id_teknisi_team, 
        id_team: req.body.id_team
    };
    let sql = "INSERT INTO team SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update team
app.put('/api/service/team/:id',(req, res) => {
    let sql = "UPDATE team SET id_teknisi='"+ req.body.id_teknisi_team +"', id_team='"+ req.body.id_team +"' WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete team
app.delete('/api/service/team/:id',(req, res) => {
    let sql = "DELETE FROM team WHERE id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json(({
            "status": 200, 
            "error": null, 
            "response": results
        }));
    });
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////



// tabel teknisi

//tampilkan semua data teknisi
app.get('/api/service/teknisi',(req, res) => {
    let sql = "SELECT * FROM teknisi";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data teknisi berdasarkan id
app.get('/api/service/teknisi/:id',(req, res) => {
    let sql = "SELECT * FROM teknisi WHERE id_teknisi="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan teknisi baru
app.post('/api/service/teknisi',(req, res) => {
    let data = {
        nama: req.body.nama_tks, 
        alamat: req.body.alamat_tks,
        bagian: req.body.bagian_tks,
        nohp: req.body.nohp_tks,
        total_poin: req.body.total_poin_tks,
        status: req.body.status_tks
    };
    let sql = "INSERT INTO teknisi SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update Teknisi
app.put('/api/service/teknisi/:id',(req, res) => {
    let sql = "UPDATE teknisi SET nama='"+req.body.nama_tks+"', alamat='"+req.body.alamat_tks+"', bagian='"+req.body.bagian_tks+"', nohp='"+req.body.nohp_tks+"', total_poin='"+req.body.total_poin_tks+"', status='"+req.body.status_tks+"' WHERE id_teknisi="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete Teknisi
app.delete('/api/service/teknisi/:id',(req, res) => {
    let sql = "DELETE FROM teknisi WHERE id_teknisi="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel tgl_konf

//tampilkan semua data tgl
app.get('/api/service/tgl-konf',(req, res) => {
    let sql = "SELECT * FROM tgl_konf";
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null,
            "response": results
        });
    });
});

//tampilkan data tgl berdasarkan id
app.get('/api/service/tgl-konf/:id',(req, res) => {
    let sql = "SELECT * FROM tgl_konf WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.json({
            "status": 200,
            "error": null,
            "response": results
        });
    });
});


//tambahkan TGL baru
app.post('/api/service/tgl-konf',(req, res) => {
    let data = {
        id_tt: req.body.id_tt, 
        tgl_konf: req.body.tgl_konf
    };
    let sql = "INSERT INTO tgl_konf SET ?";
    let query = koneksi.query(sql, data,(err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Update TGL
app.put('/api/service/tgl-konf/:id',(req, res) => {
    let sql = "UPDATE tgl_konf SET id_tt='"+req.body.id_tt+"', tgl_konf='"+req.body.tgl_konf+"' WHERE id="+req.params.id;
    let query = koneksi.query(sql, (err, results) => {
        if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});

//Delete TGL
app.delete('/api/service/tgl-konf/:id',(req, res) => {
    let sql = "DELETE FROM tgl_konf WHERE id="+req.params.id+"";
    let query = koneksi.query(sql, (err, results) => {
      if(err) throw err;
        res.json({
            "status": 200, 
            "error": null, 
            "response": results
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// tabel user


//////////////////////////////////////////////////////////////////////////////////////////////////////////